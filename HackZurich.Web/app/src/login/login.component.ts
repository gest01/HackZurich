
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";
import { LoginService } from "./login.service";

@Component({
    selector: "login",
    template: `
    <button *ngIf="!(user | async)" class="btn btn-default center-block btn-lg" (click)="login()"> <i class="fa fa-google" aria-hidden="true"></i>
    Login with Google</button>
    `,
})
export class LoginComponent {
    public user: Observable<firebase.User>;

    constructor(public auth: LoginService) {
        this.user = auth.user;
    }

    public login() {
        this.auth.login();
    }
}
