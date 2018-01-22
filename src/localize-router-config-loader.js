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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var localize_router_parser_1 = require("./localize-router.parser");
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
LocalizeRouterConfigLoader.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
LocalizeRouterConfigLoader.ctorParameters = function () { return [
    { type: localize_router_parser_1.LocalizeParser, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return localize_router_parser_1.LocalizeParser; }),] },] },
    { type: core_1.Compiler, },
    { type: core_1.SystemJsNgModuleLoaderConfig, decorators: [{ type: core_1.Optional },] },
]; };
exports.LocalizeRouterConfigLoader = LocalizeRouterConfigLoader;
