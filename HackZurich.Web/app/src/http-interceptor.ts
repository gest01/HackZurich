import { Http, ConnectionBackend, Request, Response, RequestOptions, RequestOptionsArgs, XHRBackend, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { NgLoadingBarHttp } from "ng-loading-bar";

@Injectable()
export class HttpInterceptor extends NgLoadingBarHttp {

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions) {
        super(backend, new RequestOptions({
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        }));
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options);
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, options);
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, options);
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, options);
    }
}

export const HTTP_INTERCEPTOR = {
    provide: Http,
    useClass: HttpInterceptor,
    deps: [XHRBackend, RequestOptions],
};