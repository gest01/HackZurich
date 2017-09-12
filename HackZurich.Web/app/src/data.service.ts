import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as Rx from "rxjs";
import { IAppConfig, APP_CONFIG } from "./app.config";

@Injectable()
export class DataService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public getHelloWorld(): Rx.Observable<any> {
        const apiUrl = this.config.apiEndpoint + "/";
        console.log("apiUrl = ", apiUrl);
        return this.http.get( apiUrl ).map( (response) => response.text() as any );
        //return Rx.Observable.of( [] );
    }
}