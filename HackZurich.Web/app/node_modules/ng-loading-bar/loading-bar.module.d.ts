import { ModuleWithProviders } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
export declare function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http;
export declare class NgLoadingBarModule {
    static forRoot(): ModuleWithProviders;
}
