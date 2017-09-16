import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as Rx from "rxjs";
import { IAppConfig, APP_CONFIG } from "./app.config";

@Injectable()
export class DataService {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: Http) { }

    public notifyProcess(entryId: string, imageId: number): Rx.Observable<any> {
        const apiUrl = this.config.apiEndpoint + "/api/cleanfood/image/processImage/" + entryId + "/" + imageId;
        return this.http.post(apiUrl, {});
    }
}