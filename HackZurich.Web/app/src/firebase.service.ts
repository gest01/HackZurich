import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import * as firebase from "firebase/app";
import * as Rx from "rxjs";
import { Observable } from "rxjs/Observable";
@Injectable()
export class FirebaseService {

    constructor(
        private afAuth: AngularFireAuth,
        private af: AngularFireDatabase) {
    }

    public list(path: string): FirebaseListObservable<any[]> {
        return this.af.list(path);
    }

    public create(path: string, value: any): firebase.database.ThenableReference {
        return this.af.list(path).push(value);
    }

    public createFoodEntry(entry: any): firebase.database.ThenableReference {
        return this.create("/entries", entry);
    }

    public set(path: string, value: any): firebase.Promise<void> {
        return this.af.object(path).set(value);
    }

    public updateUserVote(entrykey: string, userValue: any, user: any): firebase.Promise<void> {
        const voteObject: any = {
            vote: userValue,
            avatarUrl: user.photoURL,
            displayName: user.displayName,
            uid: user.uid,
        };
        return this.set("/entries/" + entrykey + "/votes/" + user.uid, voteObject);
    }

    public getUserVote(entrykey: string, user: any): FirebaseObjectObservable<any> {
        return this.get("/entries/" + entrykey + "/votes/" + user.uid);
    }

    public getUserVotes(entrykey: string): FirebaseListObservable<any[]> {
        return this.list("/entries/" + entrykey + "/votes/");
    }

    public getEntry(entryKey: string): FirebaseObjectObservable<any> {
        return this.get("/entries/" + entryKey);
    }

    public get(path: string): FirebaseObjectObservable<any> {
        return this.af.object(path);
    }

    public logout() {
        this.afAuth.auth.signOut();
    }

    public login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public user(): Rx.Observable<any> {
        return this.afAuth.authState;
    }

    public deleteItem(path: string) {
        this.af.object(path).remove();
    }
}