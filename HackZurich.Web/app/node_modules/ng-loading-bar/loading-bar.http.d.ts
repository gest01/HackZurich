import { Http, Request, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';
export interface LoadingBarRequestOptionsArgs extends RequestOptionsArgs {
    ignoreLoadingBar?: boolean;
}
export declare class NgLoadingBarHttp extends Http {
    pending: Subject<{}>;
    private _pendingRequests;
    request(url: string | Request, options?: LoadingBarRequestOptionsArgs): Observable<Response>;
    private requestStarted();
    private requestEnded();
}
