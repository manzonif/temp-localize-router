(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/router"), require("rxjs/add/observable/forkJoin"), require("@angular/common"), require("rxjs/add/operator/toPromise"), require("@ngx-translate/core"), require("rxjs/Observable"), require("rxjs/Subject"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/pairwise"), require("rxjs/add/operator/share"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/router", "rxjs/add/observable/forkJoin", "@angular/common", "rxjs/add/operator/toPromise", "@ngx-translate/core", "rxjs/Observable", "rxjs/Subject", "rxjs/add/operator/filter", "rxjs/add/operator/pairwise", "rxjs/add/operator/share"], factory);
	else if(typeof exports === 'object')
		exports["localize-router"] = factory(require("@angular/core"), require("@angular/router"), require("rxjs/add/observable/forkJoin"), require("@angular/common"), require("rxjs/add/operator/toPromise"), require("@ngx-translate/core"), require("rxjs/Observable"), require("rxjs/Subject"), require("rxjs/add/operator/filter"), require("rxjs/add/operator/pairwise"), require("rxjs/add/operator/share"));
	else
		root["localize-router"] = factory(root["@angular/core"], root["@angular/router"], root["rxjs/add/observable/forkJoin"], root["@angular/common"], root["rxjs/add/operator/toPromise"], root["@ngx-translate/core"], root["rxjs/Observable"], root["rxjs/Subject"], root["rxjs/add/operator/filter"], root["rxjs/add/operator/pairwise"], root["rxjs/add/operator/share"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * Guard to make sure we have single initialization of forRoot
 * @type {InjectionToken<LocalizeRouterModule>}
 */
exports.LOCALIZE_ROUTER_FORROOT_GUARD = new core_1.InjectionToken('LOCALIZE_ROUTER_FORROOT_GUARD');
/**
 * Static provider for keeping track of routes
 * @type {InjectionToken<Routes[]>}
 */
exports.RAW_ROUTES = new core_1.InjectionToken('RAW_ROUTES');
/**
 * Namespace for fail proof access of CacheMechanism
 */
var CacheMechanism;
(function (CacheMechanism) {
    CacheMechanism.LocalStorage = 'LocalStorage';
    CacheMechanism.Cookie = 'Cookie';
})(CacheMechanism = exports.CacheMechanism || (exports.CacheMechanism = {}));
/**
 * Boolean to indicate whether to use cached language value
 * @type {InjectionToken<boolean>}
 */
exports.USE_CACHED_LANG = new core_1.InjectionToken('USE_CACHED_LANG');
/**
 * Cache mechanism type
 * @type {InjectionToken<CacheMechanism>}
 */
exports.CACHE_MECHANISM = new core_1.InjectionToken('CACHE_MECHANISM');
/**
 * Cache name
 * @type {InjectionToken<string>}
 */
exports.CACHE_NAME = new core_1.InjectionToken('CACHE_NAME');
/**
 * Function for calculating default language
 * @type {InjectionToken<DefaultLanguageFunction>}
 */
exports.DEFAULT_LANG_FUNCTION = new core_1.InjectionToken('DEFAULT_LANG_FUNCTION');
/**
 * Boolean to indicate whether prefix should be set for single language scenarios
 * @type {InjectionToken<boolean>}
 */
exports.ALWAYS_SET_PREFIX = new core_1.InjectionToken('ALWAYS_SET_PREFIX');
var LOCALIZE_CACHE_NAME = 'LOCALIZE_DEFAULT_LANGUAGE';
var LocalizeRouterSettings = (function () {
    /**
     * Settings for localize router
     * @param {boolean} useCachedLang
     * @param {boolean} alwaysSetPrefix
     * @param {CacheMechanism} cacheMechanism
     * @param {string} cacheName
     * @param {DefaultLanguageFunction} defaultLangFunction
     */
    function LocalizeRouterSettings(useCachedLang, alwaysSetPrefix, cacheMechanism, cacheName, defaultLangFunction) {
        if (useCachedLang === void 0) { useCachedLang = true; }
        if (alwaysSetPrefix === void 0) { alwaysSetPrefix = true; }
        if (cacheMechanism === void 0) { cacheMechanism = CacheMechanism.LocalStorage; }
        if (cacheName === void 0) { cacheName = LOCALIZE_CACHE_NAME; }
        if (defaultLangFunction === void 0) { defaultLangFunction = void 0; }
        this.useCachedLang = useCachedLang;
        this.alwaysSetPrefix = alwaysSetPrefix;
        this.cacheMechanism = cacheMechanism;
        this.cacheName = cacheName;
        this.defaultLangFunction = defaultLangFunction;
    }
    return LocalizeRouterSettings;
}());
LocalizeRouterSettings = __decorate([
    __param(0, core_1.Inject(exports.USE_CACHED_LANG)),
    __param(1, core_1.Inject(exports.ALWAYS_SET_PREFIX)),
    __param(2, core_1.Inject(exports.CACHE_MECHANISM)),
    __param(3, core_1.Inject(exports.CACHE_NAME)),
    __param(4, core_1.Inject(exports.DEFAULT_LANG_FUNCTION)),
    __metadata("design:paramtypes", [Boolean, Boolean, String, String, Function])
], LocalizeRouterSettings);
exports.LocalizeRouterSettings = LocalizeRouterSettings;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(14);
var common_1 = __webpack_require__(8);
__webpack_require__(5);
__webpack_require__(18);
__webpack_require__(9);
var localize_router_config_1 = __webpack_require__(1);
var core_1 = __webpack_require__(0);
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
        var res = this.translate.getParsedResult(this._translationObject, this.prefix + key);
        return res || key;
    };
    return LocalizeParser;
}());
LocalizeParser = __decorate([
    __param(0, core_1.Inject(common_1.Location)),
    __param(1, core_1.Inject(localize_router_config_1.LocalizeRouterSettings)),
    __metadata("design:paramtypes", [common_1.Location,
        localize_router_config_1.LocalizeRouterSettings])
], LocalizeParser);
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var Subject_1 = __webpack_require__(15);
__webpack_require__(5);
__webpack_require__(9);
__webpack_require__(16);
__webpack_require__(17);
var localize_router_parser_1 = __webpack_require__(2);
var localize_router_config_1 = __webpack_require__(1);
/**
 * Localization service
 * modifyRoutes
 */
var LocalizeRouterService = (function () {
    /**
     * CTOR
     * @param parser
     * @param settings
     * @param router
     */
    function LocalizeRouterService(parser, settings, router) {
        this.parser = parser;
        this.settings = settings;
        this.router = router;
        this.routerEvents = new Subject_1.Subject();
    }
    /**
     * Start up the service
     */
    LocalizeRouterService.prototype.init = function () {
        this.router.resetConfig(this.parser.routes);
        // subscribe to router events
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationStart; })
            .pairwise()
            .subscribe(this._routeChanged());
    };
    /**
     * Change language and navigate to translated route
     * @param lang
     * @param extras
     * @param useNavigateMethod
     */
    LocalizeRouterService.prototype.changeLanguage = function (lang, extras, useNavigateMethod) {
        var _this = this;
        if (lang !== this.parser.currentLang) {
            var rootSnapshot_1 = this.router.routerState.snapshot.root;
            this.parser.translateRoutes(lang).subscribe(function () {
                var url = _this.traverseRouteSnapshot(rootSnapshot_1);
                if (!_this.settings.alwaysSetPrefix) {
                    var urlSegments = url.split('/');
                    var languageSegmentIndex = urlSegments.indexOf(_this.parser.currentLang);
                    //If the default language has no prefix make sure to remove and add it when necessary
                    if (_this.parser.currentLang === _this.parser.defaultLang) {
                        //Remove the language prefix from url when current language is the default language
                        if (languageSegmentIndex === 0 || (languageSegmentIndex === 1 && urlSegments[0] === '')) {
                            //Remove the current aka default language prefix from the url
                            urlSegments = urlSegments.slice(0, languageSegmentIndex).concat(urlSegments.slice(languageSegmentIndex + 1));
                        }
                    }
                    else {
                        //When coming from a default language it's possible that the url doesn't contain the language, make sure it does.
                        if (languageSegmentIndex === -1) {
                            //If the url starts with a slash make sure to keep it.
                            var injectionIndex = urlSegments[0] === '' ? 1 : 0;
                            urlSegments = urlSegments.slice(0, injectionIndex).concat(_this.parser.currentLang, urlSegments.slice(injectionIndex));
                        }
                    }
                    url = urlSegments.join('/');
                }
                if (useNavigateMethod) {
                    _this.router.navigate([url], extras);
                }
                else {
                    _this.router.navigateByUrl(url, extras);
                }
            });
        }
    };
    /**
     * Traverses through the tree to assemble new translated url
     * @param snapshot
     * @returns {string}
     */
    LocalizeRouterService.prototype.traverseRouteSnapshot = function (snapshot) {
        if (snapshot.firstChild && snapshot.firstChild.routeConfig && snapshot.firstChild.routeConfig.path) {
            if (snapshot.firstChild.routeConfig.path !== '**') {
                return this.parseSegmentValue(snapshot) + '/' + this.traverseRouteSnapshot(snapshot.firstChild);
            }
            else {
                return this.parseSegmentValue(snapshot.firstChild);
            }
        }
        return this.parseSegmentValue(snapshot);
    };
    /**
     * Extracts new segment value based on routeConfig and url
     * @param snapshot
     * @returns {string}
     */
    LocalizeRouterService.prototype.parseSegmentValue = function (snapshot) {
        if (snapshot.routeConfig) {
            if (snapshot.routeConfig.path === '**') {
                return snapshot.url.filter(function (segment) { return segment.path; }).map(function (segment) { return segment.path; }).join('/');
            }
            else {
                var subPathSegments = snapshot.routeConfig.path.split('/');
                return subPathSegments.map(function (s, i) { return s.indexOf(':') === 0 ? snapshot.url[i].path : s; }).join('/');
            }
        }
        return '';
    };
    /**
     * Translate route to current language
     * If new language is explicitly provided then replace language part in url with new language
     * @param path
     * @returns {string | any[]}
     */
    LocalizeRouterService.prototype.translateRoute = function (path) {
        var _this = this;
        if (typeof path === 'string') {
            var url = this.parser.translateRoute(path);
            return !path.indexOf('/') ? "/" + this.parser.urlPrefix + url : url;
        }
        // it's an array
        var result = [];
        path.forEach(function (segment, index) {
            if (typeof segment === 'string') {
                var res = _this.parser.translateRoute(segment);
                if (!index && !segment.indexOf('/')) {
                    result.push("/" + _this.parser.urlPrefix + res);
                }
                else {
                    result.push(res);
                }
            }
            else {
                result.push(segment);
            }
        });
        return result;
    };
    /**
     * Event handler to react on route change
     * @returns {(event:any)=>void}
     * @private
     */
    LocalizeRouterService.prototype._routeChanged = function () {
        var _this = this;
        return function (_a) {
            var previousEvent = _a[0], currentEvent = _a[1];
            var previousLang = _this.parser.getLocationLang(previousEvent.url) || _this.parser.defaultLang;
            var currentLang = _this.parser.getLocationLang(currentEvent.url) || _this.parser.defaultLang;
            if (currentLang !== previousLang) {
                _this.parser.translateRoutes(currentLang).subscribe(function () {
                    // Fire route change event
                    _this.routerEvents.next(currentLang);
                });
            }
        };
    };
    return LocalizeRouterService;
}());
LocalizeRouterService = __decorate([
    __param(0, core_1.Inject(localize_router_parser_1.LocalizeParser)), __param(1, core_1.Inject(localize_router_config_1.LocalizeRouterSettings)), __param(2, core_1.Inject(router_1.Router)),
    __metadata("design:paramtypes", [localize_router_parser_1.LocalizeParser, localize_router_config_1.LocalizeRouterSettings, router_1.Router])
], LocalizeRouterService);
exports.LocalizeRouterService = LocalizeRouterService;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(4);
var core_1 = __webpack_require__(0);
var localize_router_parser_1 = __webpack_require__(2);
/**
 * Extension of SystemJsNgModuleLoader to enable localization of route on lazy load
 */
var LocalizeRouterConfigLoader = (function (_super) {
    __extends(LocalizeRouterConfigLoader, _super);
    function LocalizeRouterConfigLoader(localize, _compiler, config) {
        var _this = _super.call(this, _compiler, config) || this;
        _this.localize = localize;
        return _this;
    }
    /**
     * Extend load with custom functionality
     * @param {string} path
     * @returns {Promise<NgModuleFactory<any>>}
     */
    LocalizeRouterConfigLoader.prototype.load = function (path) {
        var _this = this;
        return _super.prototype.load.call(this, path).then(function (factory) {
            return {
                moduleType: factory.moduleType,
                create: function (parentInjector) {
                    var module = factory.create(parentInjector);
                    var getMethod = module.injector.get.bind(module.injector);
                    module.injector['get'] = function (token, notFoundValue) {
                        var getResult = getMethod(token, notFoundValue);
                        if (token === router_1.ROUTES) {
                            // translate lazy routes
                            return _this.localize.initChildRoutes([].concat.apply([], getResult));
                        }
                        else {
                            return getResult;
                        }
                    };
                    return module;
                }
            };
        });
    };
    return LocalizeRouterConfigLoader;
}(core_1.SystemJsNgModuleLoader));
LocalizeRouterConfigLoader = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return localize_router_parser_1.LocalizeParser; }))), __param(2, core_1.Optional()),
    __metadata("design:paramtypes", [localize_router_parser_1.LocalizeParser, core_1.Compiler, core_1.SystemJsNgModuleLoaderConfig])
], LocalizeRouterConfigLoader);
exports.LocalizeRouterConfigLoader = LocalizeRouterConfigLoader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var localize_router_service_1 = __webpack_require__(3);
__webpack_require__(5);
var util_1 = __webpack_require__(12);
var VIEW_DESTROYED_STATE = 128;
var LocalizeRouterPipe = (function () {
    /**
     * CTOR
     * @param localize
     * @param _ref
     */
    function LocalizeRouterPipe(localize, _ref) {
        var _this = this;
        this.localize = localize;
        this._ref = _ref;
        this.value = '';
        this.subscription = this.localize.routerEvents.subscribe(function () {
            _this.transform(_this.lastKey);
        });
    }
    /**
     * Transform current url to localized one
     * @param query
     * @returns {string | any[]}
     */
    LocalizeRouterPipe.prototype.transform = function (query) {
        if (!query || query.length === 0 || !this.localize.parser.currentLang) {
            return query;
        }
        if (util_1.equals(query, this.lastKey) && util_1.equals(this.lastLanguage, this.localize.parser.currentLang)) {
            return this.value;
        }
        this.lastKey = query;
        this.lastLanguage = this.localize.parser.currentLang;
        /** translate key and update values */
        this.value = this.localize.translateRoute(query);
        this.lastKey = query;
        // if view is already destroyed, ignore firing change detection
        if (this._ref._view.state & VIEW_DESTROYED_STATE) {
            return this.value;
        }
        this._ref.detectChanges();
        return this.value;
    };
    return LocalizeRouterPipe;
}());
LocalizeRouterPipe = __decorate([
    core_1.Pipe({
        name: 'localize',
        pure: false // required to update the value when the promise is resolved
    }),
    __metadata("design:paramtypes", [localize_router_service_1.LocalizeRouterService, core_1.ChangeDetectorRef])
], LocalizeRouterPipe);
exports.LocalizeRouterPipe = LocalizeRouterPipe;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var localize_router_service_1 = __webpack_require__(3);
var localize_router_parser_1 = __webpack_require__(2);
var router_1 = __webpack_require__(4);
var localize_router_pipe_1 = __webpack_require__(7);
var core_2 = __webpack_require__(13);
var common_1 = __webpack_require__(8);
var localize_router_config_1 = __webpack_require__(1);
var localize_router_config_loader_1 = __webpack_require__(6);
var ParserInitializer = (function () {
    /**
     * CTOR
     * @param injector
     */
    function ParserInitializer(injector) {
        this.injector = injector;
    }
    /**
     * @returns {Promise<any>}
     */
    ParserInitializer.prototype.appInitializer = function () {
        var _this = this;
        var translate = this.injector.get(core_2.TranslateService);
        var res = this.parser.load(this.routes, translate);
        res.then(function () {
            var localize = _this.injector.get(localize_router_service_1.LocalizeRouterService);
            localize.init();
        });
        return res;
    };
    /**
     * @param parser
     * @param routes
     * @returns {()=>Promise<any>}
     */
    ParserInitializer.prototype.generateInitializer = function (parser, routes) {
        this.parser = parser;
        this.routes = routes.reduce(function (a, b) { return a.concat(b); });
        return this.appInitializer;
    };
    return ParserInitializer;
}());
ParserInitializer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Injector])
], ParserInitializer);
exports.ParserInitializer = ParserInitializer;
/**
 * @param p
 * @param parser
 * @param routes
 * @returns {any}
 */
function getAppInitializer(p, parser, routes) {
    return p.generateInitializer(parser, routes).bind(p);
}
exports.getAppInitializer = getAppInitializer;
var LocalizeRouterModule = LocalizeRouterModule_1 = (function () {
    function LocalizeRouterModule() {
    }
    LocalizeRouterModule.forRoot = function (routes, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: LocalizeRouterModule_1,
            providers: [
                {
                    provide: localize_router_config_1.LOCALIZE_ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[LocalizeRouterModule_1, new core_1.Optional(), new core_1.SkipSelf()]]
                },
                { provide: localize_router_config_1.USE_CACHED_LANG, useValue: config.useCachedLang },
                { provide: localize_router_config_1.ALWAYS_SET_PREFIX, useValue: config.alwaysSetPrefix },
                { provide: localize_router_config_1.CACHE_NAME, useValue: config.cacheName },
                { provide: localize_router_config_1.CACHE_MECHANISM, useValue: config.cacheMechanism },
                { provide: localize_router_config_1.DEFAULT_LANG_FUNCTION, useValue: config.defaultLangFunction },
                localize_router_config_1.LocalizeRouterSettings,
                config.parser || { provide: localize_router_parser_1.LocalizeParser, useClass: localize_router_parser_1.DummyLocalizeParser },
                {
                    provide: localize_router_config_1.RAW_ROUTES,
                    multi: true,
                    useValue: routes
                },
                localize_router_service_1.LocalizeRouterService,
                ParserInitializer,
                { provide: core_1.NgModuleFactoryLoader, useClass: localize_router_config_loader_1.LocalizeRouterConfigLoader },
                {
                    provide: core_1.APP_INITIALIZER,
                    multi: true,
                    useFactory: getAppInitializer,
                    deps: [ParserInitializer, localize_router_parser_1.LocalizeParser, localize_router_config_1.RAW_ROUTES]
                }
            ]
        };
    };
    LocalizeRouterModule.forChild = function (routes) {
        return {
            ngModule: LocalizeRouterModule_1,
            providers: [
                {
                    provide: localize_router_config_1.RAW_ROUTES,
                    multi: true,
                    useValue: routes
                }
            ]
        };
    };
    return LocalizeRouterModule;
}());
LocalizeRouterModule = LocalizeRouterModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule, core_2.TranslateModule],
        declarations: [localize_router_pipe_1.LocalizeRouterPipe],
        exports: [localize_router_pipe_1.LocalizeRouterPipe]
    })
], LocalizeRouterModule);
exports.LocalizeRouterModule = LocalizeRouterModule;
/**
 * @param localizeRouterModule
 * @returns {string}
 */
function provideForRootGuard(localizeRouterModule) {
    if (localizeRouterModule) {
        throw new Error("LocalizeRouterModule.forRoot() called twice. Lazy loaded modules should use LocalizeRouterModule.forChild() instead.");
    }
    return 'guarded';
}
exports.provideForRootGuard = provideForRootGuard;
var LocalizeRouterModule_1;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__export(__webpack_require__(2));
__export(__webpack_require__(3));
__export(__webpack_require__(7));
__export(__webpack_require__(1));
__export(__webpack_require__(6));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Compare if two objects are same
 * @param o1
 * @param o2
 * @returns {boolean}
 */
function equals(o1, o2) {
    if (o1 === o2) {
        return true;
    }
    if (o1 === null || o2 === null) {
        return false;
    }
    if (o1 !== o1 && o2 !== o2) {
        return true; // NaN === NaN
    }
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 === t2 && t1 === 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2)) {
                return false;
            }
            if ((length = o1.length) === o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key])) {
                        return false;
                    }
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (o1.hasOwnProperty(key)) {
                    if (!equals(o1[key], o2[key])) {
                        return false;
                    }
                    keySet[key] = true;
                }
            }
            for (key in o2) {
                if (o2.hasOwnProperty(key)) {
                    if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                        return false;
                    }
                }
            }
            return true;
        }
    }
    return false;
}
exports.equals = equals;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=localize-router.umd.js.map