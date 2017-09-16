import { Component, OnInit } from "@angular/core";

import "../custom.css";
import { LoginService } from "./login/login.service";
import { Observable } from "rxjs";
import * as firebase from "firebase/app";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public user: Observable<firebase.User>;

    constructor(private auth: LoginService) {
        this.user = auth.user;
    }

    public logout() {
        this.auth.logout();
    }
}
