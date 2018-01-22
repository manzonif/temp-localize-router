"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/pairwise");
var localize_router_parser_1 = require("./localize-router.parser");
var localize_router_config_1 = require("./localize-router.config");
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
/** @nocollapse */
LocalizeRouterService.ctorParameters = function () { return [
    { type: localize_router_parser_1.LocalizeParser, decorators: [{ type: core_1.Inject, args: [localize_router_parser_1.LocalizeParser,] },] },
    { type: localize_router_config_1.LocalizeRouterSettings, decorators: [{ type: core_1.Inject, args: [localize_router_config_1.LocalizeRouterSettings,] },] },
    { type: router_1.Router, decorators: [{ type: core_1.Inject, args: [router_1.Router,] },] },
]; };
exports.LocalizeRouterService = LocalizeRouterService;
