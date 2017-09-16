import { Component, OnInit } from "@angular/core";
import { FirebaseListObservable } from "angularfire2/database";
import * as Rx from "rxjs";
import { FirebaseService } from "../firebase.service";

@Component({
    selector: "my-stats",
    templateUrl: "my-stats.component.html",
})
export class MyStatsComponent implements OnInit {
    public user: Rx.Observable<any>;
    public entries: FirebaseListObservable<any[]>;

    constructor(
        private firebase: FirebaseService) {
    }

    public ngOnInit(): void {
        this.entries = this.firebase.list("/entries");
        this.user = this.firebase.user();
    }
}