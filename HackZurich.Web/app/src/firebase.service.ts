import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import * as firebase from "firebase/app";

@Injectable()
export class FirebaseService {

    constructor(
        private afAuth: AngularFireAuth,
        private af: AngularFireDatabase) {
    }

    public list(path: string): FirebaseListObservable<any[]> {
        return this.af.list(path);
    }

    public create(path: string, value: any): void {
        this.af.list(path).push(value);
    }

    public logout() {
        this.afAuth.auth.signOut();
    }

    public login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public user(): any {
        return this.afAuth.authState;
    }
}