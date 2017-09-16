
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import "../custom.css";
import { LoginService } from "./login.service";

@Component({
    selector: "login",
    template: `
    <div><pre> {{ (user | async) | json }} </pre></div>
    <button *ngIf="!(user | async)" (click)="login()">Login with Google</button>
    `,
})

export class LoginComponent {
    user: Observable<firebase.User>;

    constructor(public auth: LoginService) {
        this.user = auth.user;
    }

    login() {
        this.auth.login();
    }
}
