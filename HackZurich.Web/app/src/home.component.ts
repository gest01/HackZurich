import { Component, OnInit } from "@angular/core";
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseService } from "./firebase.service";
import * as Rx from "rxjs";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
    public user: Rx.Observable<any>;
    public entries: FirebaseListObservable<any[]>;

    constructor(
        private firebase: FirebaseService) {
    }

    public ngOnInit(): void {
        this.entries = this.firebase.list("/entries");
        this.user = this.firebase.user();
    }

    public createEntry(user: any): void {
        const val = {
            imageUrl: "http://www.google.com",

            healthscore: 12,
            user: {
                uid : user.uid,
                displayName : user.displayName,
                avatarUrl : user.photoURL,
            },

            google: {
                value1: 1,
                value2: "asdsd",
            },
            nutrition: {
                value1: 1,
                value2: "asdsd",
            },
        };

        this.firebase.create("/entries", val);
    }
}