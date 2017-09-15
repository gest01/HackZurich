import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class FirebaseService {

    constructor(
        private afAuth: AngularFireAuth,
        private af: AngularFireDatabase) {
    }

    public test(path: string): FirebaseListObservable<any[]> {
        return this.af.list(path);
    }

    public initializeFirebase(): void {
        // const config = {
        //     apiKey: "AIzaSyC714sV9ckNYVHS4RLxcTx4GjxXJFTszwg",
        //     authDomain: "hackzurich2017.firebaseapp.com",
        //     databaseURL: "https://hackzurich2017.firebaseio.com",
        //     projectId: "hackzurich2017",
        //     storageBucket: "hackzurich2017.appspot.com",
        //     messagingSenderId: "885304700993",
        // };

        // console.log("init firebase..", config);
        // firebase.initializeApp(config);
    }

    // public getFirebase(path: string): firebase.database.Reference {
    //     return firebase.database().ref(path);
    // }
}