import { Routes, Route } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/toPromise';
import { LocalizeRouterSettings } from './localize-router.config';
/**
 * Abstract class for parsing localization
 */
export declare abstract class LocalizeParser {
    private location;
    private settings;
    locales: Array<string>;
    currentLang: string;
    routes: Routes;
    defaultLang: string;
    translate: TranslateService;
    protected prefix: string;
    private _translationObject;
    private _wildcardRoute;
    private _languageRoute;
    /**
     * Loader constructor
     * @param location
     * @param settings
     */
    constructor(location: Location, settings: LocalizeRouterSettings);
    /**
     * Load routes and fetch necessary data
     * @param routes
     * @returns {Promise<any>}
     */
    abstract load(routes: Routes, translate: TranslateService): Promise<any>;
    /**
     * Initialize language and routes
     * @param routes
     * @returns {Promise<any>}
     */
    protected init(routes: Routes, translate: TranslateService): Promise<any>;
    initChildRoutes(routes: Routes): Route[];
    /**
     * Translate routes to selected language
     * @param language
     * @returns {Promise<any>}
     */
    translateRoutes(language: string): Observable<any>;
    /**
     * Translate the route node and recursively call for all it's children
     * @param routes
     * @private
     */
    private _translateRouteTree(routes);
    /**
     * Translate property
     * If first time translation then add original to route data object
     * @param route
     * @param property
     * @param prefixLang
     * @private
     */
    private _translateProperty(route, property, prefixLang?);
    readonly urlPrefix: string;
    /**
     * Translate route and return observable
     * @param path
     * @returns {string}
     */
    translateRoute(path: string): string;
    /**
     * Get language from url
     * @returns {string}
     * @private
     */
    getLocationLang(url?: string): string;
    /**
     * Get user's language set in the browser
     * @returns {string}
     * @private
     */
    private _getBrowserLang();
    /**
     * Get language from local storage or cookie
     * @returns {string}
     * @private
     */
    /**
     * Save language to local storage or cookie
     * @param value
     * @private
     */
    private _cachedLang;
    /**
     * Cache value to local storage
     * @param value
     * @returns {string}
     * @private
     */
    private _cacheWithLocalStorage(value?);
    /**
     * Cache value via cookies
     * @param value
     * @private
     */
    private _cacheWithCookies(value?);
    /**
     * Check if value exists in locales list
     * @param value
     * @returns {any}
     * @private
     */
    private _returnIfInLocales(value);
    /**
     * Get translated value
     * @param key
     * @returns {any}
     */
    private translateText(key);
}
/**
 * Manually set configuration
 */
export declare class ManualParserLoader extends LocalizeParser {
    /**
     * CTOR
     * @param translate
     * @param location
     * @param settings
     * @param locales
     * @param prefix
     */
    constructor(location: Location, settings: LocalizeRouterSettings, locales?: string[], prefix?: string);
    /**
     * Initialize or append routes
     * @param routes
     * @returns {Promise<any>}
     */
    load(routes: Routes, translate: TranslateService): Promise<any>;
}
export declare class DummyLocalizeParser extends LocalizeParser {
    load(routes: Routes, translate: TranslateService): Promise<any>;
}
