import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "./firebase.service";
import * as Rx from "rxjs";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
    public user: Rx.Observable<any>;
    constructor(
        private firebase: FirebaseService) {
    }

    public ngOnInit(): void {
        this.user = this.firebase.user();
    }
}