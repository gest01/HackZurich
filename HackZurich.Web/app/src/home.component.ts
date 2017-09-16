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
    
    public user: Observable<firebase.User>;
    public entries: FirebaseListObservable<any[]>;

    constructor(
        private firebase: FirebaseService,
        private auth: LoginService) {
    }
    public ngOnInit(): void {
        this.entries = this.firebase.list("/entries");
        this.user = this.auth.user;

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