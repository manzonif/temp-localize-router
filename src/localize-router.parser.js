"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var common_1 = require("@angular/common");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/operator/share");
require("rxjs/add/operator/toPromise");
var localize_router_config_1 = require("./localize-router.config");
var core_1 = require("@angular/core");
var COOKIE_EXPIRY = 30; // 1 month
/**
 * Abstract class for parsing localization
 */
var LocalizeParser = (function () {
    /**
     * Loader constructor
     * @param location
     * @param settings
     */
    function LocalizeParser(location, settings) {
        this.location = location;
        this.settings = settings;
    }
    /**
     * Initialize language and routes
     * @param routes
     * @returns {Promise<any>}
     */
    LocalizeParser.prototype.init = function (routes, translate) {
        var selectedLanguage;
        this.routes = routes;
        this.translate = translate;
        if (!this.locales || !this.locales.length) {
            return Promise.resolve();
        }
        /** detect current language */
        var locationLang = this.getLocationLang();
        var browserLang = this._getBrowserLang();
        if (this.settings.defaultLangFunction) {
            this.defaultLang = this.settings.defaultLangFunction(this.locales, this._cachedLang, browserLang);
        }
        else {
            this.defaultLang = this._cachedLang || browserLang || this.locales[0];
        }
        selectedLanguage = locationLang || this.defaultLang;
        this.translate.setDefaultLang(this.defaultLang);
        var children = [];
        /** if set prefix is enforced */
        if (this.settings.alwaysSetPrefix) {
            var baseRoute = { path: '', redirectTo: this.defaultLang, pathMatch: 'full' };
            /** extract potential wildcard route */
            var wildcardIndex = routes.findIndex(function (route) { return route.path === '**'; });
            if (wildcardIndex !== -1) {
                this._wildcardRoute = routes.splice(wildcardIndex, 1)[0];
            }
            children = this.routes.splice(0, this.routes.length, baseRoute);
        }
        else {
            children = this.routes.slice(); // shallow copy of routes
        }
        /** exclude certain routes */
        for (var i = children.length - 1; i >= 0; i--) {
            if (children[i].data && children[i].data['skipRouteLocalization']) {
                if (this.settings.alwaysSetPrefix) {
                    // add directly to routes
                    this.routes.push(children[i]);
                }
                children.splice(i, 1);
            }
        }
        /** append children routes */
        if (children && children.length) {
            if (this.locales.length > 1 || this.settings.alwaysSetPrefix) {
                this._languageRoute = { children: children };
                this.routes.unshift(this._languageRoute);
            }
        }
        /** ...and potential wildcard route */
        if (this._wildcardRoute && this.settings.alwaysSetPrefix) {
            this.routes.push(this._wildcardRoute);
        }
        /** translate routes */
        var res = this.translateRoutes(selectedLanguage);
        return res.toPromise();
    };
    LocalizeParser.prototype.initChildRoutes = function (routes) {
        this._translateRouteTree(routes);
        return routes;
    };
    /**
     * Translate routes to selected language
     * @param language
     * @returns {Promise<any>}
     */
    LocalizeParser.prototype.translateRoutes = function (language) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._cachedLang = language;
            if (_this._languageRoute) {
                _this._languageRoute.path = language;
            }
            _this.translate.use(language).subscribe(function (translations) {
                _this._translationObject = translations;
                _this.currentLang = language;
                if (_this._languageRoute) {
                    if (_this._languageRoute) {
                        _this._translateRouteTree(_this._languageRoute.children);
                    }
                    // if there is wildcard route
                    if (_this._wildcardRoute && _this._wildcardRoute.redirectTo) {
                        _this._translateProperty(_this._wildcardRoute, 'redirectTo', true);
                    }
                }
                else {
                    _this._translateRouteTree(_this.routes);
                }
                observer.next(void 0);
                observer.complete();
            });
        });
    };
    /**
     * Translate the route node and recursively call for all it's children
     * @param routes
     * @private
     */
    LocalizeParser.prototype._translateRouteTree = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            if (route.path && route.path !== '**') {
                _this._translateProperty(route, 'path');
            }
            if (route.redirectTo) {
                _this._translateProperty(route, 'redirectTo', !route.redirectTo.indexOf('/'));
            }
            if (route.children) {
                _this._translateRouteTree(route.children);
            }
            if (route.loadChildren && route._loadedConfig) {
                _this._translateRouteTree(route._loadedConfig.routes);
            }
        });
    };
    /**
     * Translate property
     * If first time translation then add original to route data object
     * @param route
     * @param property
     * @param prefixLang
     * @private
     */
    LocalizeParser.prototype._translateProperty = function (route, property, prefixLang) {
        // set property to data if not there yet
        var routeData = route.data = route.data || {};
        if (!routeData.localizeRouter) {
            routeData.localizeRouter = {};
        }
        if (!routeData.localizeRouter[property]) {
            routeData.localizeRouter[property] = route[property];
        }
        var result = this.translateRoute(routeData.localizeRouter[property]);
        route[property] = prefixLang ? "/" + this.urlPrefix + result : result;
    };
    Object.defineProperty(LocalizeParser.prototype, "urlPrefix", {
        get: function () {
            return this.settings.alwaysSetPrefix || this.currentLang !== this.defaultLang ? this.currentLang : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Translate route and return observable
     * @param path
     * @returns {string}
     */
    LocalizeParser.prototype.translateRoute = function (path) {
        var _this = this;
        var queryParts = path.split('?');
        if (queryParts.length > 2) {
            throw 'There should be only one query parameter block in the URL';
        }
        var pathSegments = queryParts[0].split('/');
        /** collect observables  */
        return pathSegments
            .map(function (part) { return part.length ? _this.translateText(part) : part; })
            .join('/') +
            (queryParts.length > 1 ? "?" + queryParts[1] : '');
    };
    /**
     * Get language from url
     * @returns {string}
     * @private
     */
    LocalizeParser.prototype.getLocationLang = function (url) {
        var queryParamSplit = (url || this.location.path()).split('?');
        var pathSlices = [];
        if (queryParamSplit.length > 0) {
            pathSlices = queryParamSplit[0].split('/');
        }
        if (pathSlices.length > 1 && this.locales.indexOf(pathSlices[1]) !== -1) {
            return pathSlices[1];
        }
        if (pathSlices.length && this.locales.indexOf(pathSlices[0]) !== -1) {
            return pathSlices[0];
        }
        return null;
    };
    /**
     * Get user's language set in the browser
     * @returns {string}
     * @private
     */
    LocalizeParser.prototype._getBrowserLang = function () {
        return this._returnIfInLocales(this.translate.getBrowserLang());
    };
    Object.defineProperty(LocalizeParser.prototype, "_cachedLang", {
        /**
         * Get language from local storage or cookie
         * @returns {string}
         * @private
         */
        get: function () {
            if (!this.settings.useCachedLang) {
                return;
            }
            if (this.settings.cacheMechanism === localize_router_config_1.CacheMechanism.LocalStorage) {
                return this._cacheWithLocalStorage();
            }
            if (this.settings.cacheMechanism === localize_router_config_1.CacheMechanism.Cookie) {
                return this._cacheWithCookies();
            }
        },
        /**
         * Save language to local storage or cookie
         * @param value
         * @private
         */
        set: function (value) {
            if (!this.settings.useCachedLang) {
                return;
            }
            if (this.settings.cacheMechanism === localize_router_config_1.CacheMechanism.LocalStorage) {
                this._cacheWithLocalStorage(value);
            }
            if (this.settings.cacheMechanism === localize_router_config_1.CacheMechanism.Cookie) {
                this._cacheWithCookies(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Cache value to local storage
     * @param value
     * @returns {string}
     * @private
     */
    LocalizeParser.prototype._cacheWithLocalStorage = function (value) {
        if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
            return;
        }
        try {
            if (value) {
                window.localStorage.setItem(this.settings.cacheName, value);
                return;
            }
            return this._returnIfInLocales(window.localStorage.getItem(this.settings.cacheName));
        }
        catch (e) {
            // weird Safari issue in private mode, where LocalStorage is defined but throws error on access
            return;
        }
    };
    /**
     * Cache value via cookies
     * @param value
     * @private
     */
    LocalizeParser.prototype._cacheWithCookies = function (value) {
        if (typeof document === 'undefined' || typeof document.cookie === 'undefined') {
            return;
        }
        try {
            var name_1 = encodeURIComponent(this.settings.cacheName);
            if (value) {
                var d = new Date();
                d.setTime(d.getTime() + COOKIE_EXPIRY * 86400000); // * days
                document.cookie = name_1 + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString();
                return;
            }
            var regexp = new RegExp('(?:^' + name_1 + '|;\\s*' + name_1 + ')=(.*?)(?:;|$)', 'g');
            var result = regexp.exec(document.cookie);
            return decodeURIComponent(result[1]);
        }
        catch (e) {
            return; // should not happen but better safe than sorry
        }
    };
    /**
     * Check if value exists in locales list
     * @param value
     * @returns {any}
     * @private
     */
    LocalizeParser.prototype._returnIfInLocales = function (value) {
        if (value && this.locales.indexOf(value) !== -1) {
            return value;
        }
        return null;
    };
    /**
     * Get translated value
     * @param key
     * @returns {any}
     */
    LocalizeParser.prototype.translateText = function (key) {
        if (!this._translationObject) {
            return key;
        }
        var res = this._translationObject[this.prefix + key];
        return res || key;
    };
    return LocalizeParser;
}());
/** @nocollapse */
LocalizeParser.ctorParameters = function () { return [
    { type: common_1.Location, decorators: [{ type: core_1.Inject, args: [common_1.Location,] },] },
    { type: localize_router_config_1.LocalizeRouterSettings, decorators: [{ type: core_1.Inject, args: [localize_router_config_1.LocalizeRouterSettings,] },] },
]; };
exports.LocalizeParser = LocalizeParser;
/**
 * Manually set configuration
 */
var ManualParserLoader = (function (_super) {
    __extends(ManualParserLoader, _super);
    /**
     * CTOR
     * @param translate
     * @param location
     * @param settings
     * @param locales
     * @param prefix
     */
    function ManualParserLoader(location, settings, locales, prefix) {
        if (locales === void 0) { locales = ['en']; }
        if (prefix === void 0) { prefix = 'ROUTES.'; }
        var _this = _super.call(this, location, settings) || this;
        _this.locales = locales;
        _this.prefix = prefix || '';
        return _this;
    }
    /**
     * Initialize or append routes
     * @param routes
     * @returns {Promise<any>}
     */
    ManualParserLoader.prototype.load = function (routes, translate) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.init(routes, translate).then(resolve);
        });
    };
    return ManualParserLoader;
}(LocalizeParser));
exports.ManualParserLoader = ManualParserLoader;
var DummyLocalizeParser = (function (_super) {
    __extends(DummyLocalizeParser, _super);
    function DummyLocalizeParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DummyLocalizeParser.prototype.load = function (routes, translate) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.init(routes, translate).then(resolve);
        });
    };
    return DummyLocalizeParser;
}(LocalizeParser));
exports.DummyLocalizeParser = DummyLocalizeParser;
