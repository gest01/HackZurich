import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as Rx from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginService {
    public user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    public login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout() {
        this.afAuth.auth.signOut();
    }
}