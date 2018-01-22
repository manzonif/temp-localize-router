"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
/** @nocollapse */
LocalizeRouterSettings.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.USE_CACHED_LANG,] },] },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.ALWAYS_SET_PREFIX,] },] },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.CACHE_MECHANISM,] },] },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.CACHE_NAME,] },] },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.DEFAULT_LANG_FUNCTION,] },] },
]; };
exports.LocalizeRouterSettings = LocalizeRouterSettings;
