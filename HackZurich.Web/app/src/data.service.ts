import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as Rx from "rxjs";
import { IAppConfig, APP_CONFIG } from "./app.config";

@Injectable()
export class DataService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public notifyProcess(entryId: string, imageUrl: string): Rx.Observable<any> {
        const apiUrl = this.config.apiEndpoint + "/api/";
        return Rx.Observable.of({});
    }

    public getPeople(): Rx.Observable<any[]> {
        const apiUrl = this.config.apiEndpoint + "/api/personen/";
        return this.http.get(apiUrl).map((response) => response.json() as any[]);
    }
}