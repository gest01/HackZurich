import { Component, OnInit } from "@angular/core";
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseService } from "./firebase.service";
import * as Rx from "rxjs";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
    public user: any;
    public entries: FirebaseListObservable<any[]>;

    constructor(
        private firebase: FirebaseService) {
    }

    public ngOnInit(): void {
        this.entries = this.firebase.list("/entries");
        this.firebase.user().subscribe( (user) => this.user = user );
    }

    public createEntry(user: any): void {
        const val = {
            imageUrl: "http://www.google.com",
            healthscore: 12,
            user: user.uid,
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