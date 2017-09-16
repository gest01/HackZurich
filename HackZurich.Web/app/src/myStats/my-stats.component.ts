import { Component } from "@angular/core";
import { FirebaseListObservable } from "angularfire2/database";
import * as Rx from "rxjs";
import { FirebaseService } from "../firebase.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "my-stats",
    templateUrl: "my-stats.component.html",
})
export class MyStatsComponent {
    public user: Rx.Observable<any>;
    public entries: FirebaseListObservable<any[]>;
    public radioModel: string = "Today"; // AllTime, LastWeek

    constructor(
        private route: ActivatedRoute,
        private firebase: FirebaseService) {

        this.entries = this.firebase.list("/entries");
        this.user = this.route.params.switchMap((params: Params) => this.getUser(params));
    }

    private getUser(params: Params): Rx.Observable<any> {
        const id = params["id"];
        if (id === "" || id === undefined || id == null) {
            return this.firebase.user();
        }

        return this.firebase.getUser(id);
    }
}