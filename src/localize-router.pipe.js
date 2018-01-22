"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var localize_router_service_1 = require("./localize-router.service");
require("rxjs/add/observable/forkJoin");
var util_1 = require("./util");
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
LocalizeRouterPipe.decorators = [
    { type: core_1.Pipe, args: [{
                name: 'localize',
                pure: false // required to update the value when the promise is resolved
            },] },
];
/** @nocollapse */
LocalizeRouterPipe.ctorParameters = function () { return [
    { type: localize_router_service_1.LocalizeRouterService, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.LocalizeRouterPipe = LocalizeRouterPipe;
