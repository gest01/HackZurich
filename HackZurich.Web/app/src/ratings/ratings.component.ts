import { Component, OnInit } from "@angular/core";
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseService } from "../firebase.service";
import * as Rx from "rxjs";

@Component({
    templateUrl: "ratings.component.html",
})

export class RatingsComponent implements OnInit {
    
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