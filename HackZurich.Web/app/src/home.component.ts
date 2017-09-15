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
    public data: FirebaseListObservable<any[]>;

    constructor(
        private firebase: FirebaseService) {
    }
    public ngOnInit(): void {
        this.data = this.firebase.test("/hello");
    }
}