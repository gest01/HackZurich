import * as Rx from "rxjs";
import { Component, OnInit } from "@angular/core";
import { importExpr } from "@angular/compiler/src/output/output_ast";
import { DataService } from "./data.service";
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseService } from "./firebase.service";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
    public entries: FirebaseListObservable<any[]>;

    constructor(
        private firebase: FirebaseService) {
    }
    public ngOnInit(): void {
        this.entries = this.firebase.list("/entries");
    }

    public createEntry(): void {
        const val = {
            imageUrl: "http://www.google.com",
            healthscore: 12,
            user: "james bond",
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