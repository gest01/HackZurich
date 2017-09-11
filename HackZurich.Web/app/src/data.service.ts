import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as Rx from "rxjs";
import { IAppConfig, APP_CONFIG } from "./app.config";

@Injectable()
export class DataService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public getData(): Rx.Observable<any[]> {
        const apiUrl = this.config.apiEndpoint + "/helloEndpoint";
        console.log("apiUrl = ", apiUrl);
        return Rx.Observable.of( [] );
    }
}