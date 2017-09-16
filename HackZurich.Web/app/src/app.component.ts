import { Component, OnInit } from "@angular/core";

import "../custom.css";
import "../node_modules/nouislider/distribute/nouislider.min.css";

import { LoginService } from "./login/login.service";
import { Observable } from "rxjs";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public user: Observable<any>;

    constructor(private auth: LoginService) {
        this.user = auth.user;
    }

    public logout() {
        this.auth.logout();
    }
}
