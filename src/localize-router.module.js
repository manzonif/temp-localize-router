"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var localize_router_service_1 = require("./localize-router.service");
var localize_router_parser_1 = require("./localize-router.parser");
var router_1 = require("@angular/router");
var localize_router_pipe_1 = require("./localize-router.pipe");
var core_2 = require("@ngx-translate/core");
var common_1 = require("@angular/common");
var localize_router_config_1 = require("./localize-router.config");
var localize_router_config_loader_1 = require("./localize-router-config-loader");
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
ParserInitializer.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ParserInitializer.ctorParameters = function () { return [
    { type: core_1.Injector, },
]; };
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
var LocalizeRouterModule = (function () {
    function LocalizeRouterModule() {
    }
    LocalizeRouterModule.forRoot = function (routes, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: LocalizeRouterModule,
            providers: [
                {
                    provide: localize_router_config_1.LOCALIZE_ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[LocalizeRouterModule, new core_1.Optional(), new core_1.SkipSelf()]]
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
            ngModule: LocalizeRouterModule,
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
LocalizeRouterModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, router_1.RouterModule, core_2.TranslateModule],
                declarations: [localize_router_pipe_1.LocalizeRouterPipe],
                exports: [localize_router_pipe_1.LocalizeRouterPipe]
            },] },
];
/** @nocollapse */
LocalizeRouterModule.ctorParameters = function () { return []; };
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
