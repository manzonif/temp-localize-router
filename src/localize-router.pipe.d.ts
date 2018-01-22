import { PipeTransform, ChangeDetectorRef } from '@angular/core';
import { LocalizeRouterService } from './localize-router.service';
import 'rxjs/add/observable/forkJoin';
export declare class LocalizeRouterPipe implements PipeTransform {
    private localize;
    private _ref;
    private value;
    private lastKey;
    private lastLanguage;
    private subscription;
    /**
     * CTOR
     * @param localize
     * @param _ref
     */
    constructor(localize: LocalizeRouterService, _ref: ChangeDetectorRef);
    /**
     * Transform current url to localized one
     * @param query
     * @returns {string | any[]}
     */
    transform(query: string | any[]): string | any[];
}
