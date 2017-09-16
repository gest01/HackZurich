import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FirebaseService } from "../firebase.service";

@Injectable()
export class LoginService {
    public user: Observable<any>;
    constructor(
        private firebaseService: FirebaseService) {
        this.user = firebaseService.user();
    }

    public login() {
        this.firebaseService.login();
    }

    public logout() {
        this.firebaseService.logout();
    }
}