import * as Rx from "rxjs";
import { Component, OnInit } from "@angular/core";
import { importExpr } from "@angular/compiler/src/output/output_ast";
import { DataService } from "./data.service";
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseService } from "./firebase.service";
import { LoginService } from "../login/login.service";
import { Observable } from "rxjs";
import * as firebase from 'firebase/app';

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
    public data: FirebaseListObservable<any[]>;
    public user: Observable<firebase.User>;

    constructor(
        private firebase: FirebaseService,
        private auth: LoginService) {
    }
    public ngOnInit(): void {
        this.data = this.firebase.test("/hello");
        this.user = this.auth.user;
    }

}