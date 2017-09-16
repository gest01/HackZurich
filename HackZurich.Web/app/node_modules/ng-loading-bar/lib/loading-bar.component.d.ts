import { Renderer, AfterViewInit } from '@angular/core';
import { NgLoadingBarHttp } from './loading-bar.http';
export declare class NgLoadingBarComponent implements AfterViewInit {
    private _renderer;
    _spinner: any;
    _loadingBarContainer: any;
    _loadingBar: any;
    includeSpinner: boolean;
    private _autoIncrement;
    private _includeBar;
    private _latencyThreshold;
    private _startSize;
    private _started;
    private _status;
    private _incTimeout;
    private _completeTimeout;
    private _startTimeout;
    constructor(_renderer: Renderer, http: NgLoadingBarHttp);
    ngAfterViewInit(): void;
    private start();
    private set(n);
    private complete();
    private inc();
    private show(el);
    private hide(el);
    private setElementStyle(el, styleName, styleValue);
}
