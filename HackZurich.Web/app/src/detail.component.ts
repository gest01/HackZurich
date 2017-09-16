import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "./firebase.service";
import * as Rx from "rxjs";
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent {
    @Input() public user: any;

    public userValue: any = 0;
    public userVotes: any[];

    @Input() public set entry(entry: any) {
        this.internalEntry = entry;

        this.firebaseService.getUserVote(entry.$key, this.user).defaultIfEmpty({ vote: 50 }).subscribe((value) => {
            this.userValue = value.vote;
        });

        this.firebaseService.getUserVotes(entry.$key).defaultIfEmpty([]).subscribe((votes) => {
            this.userVotes = votes;
        });
    }

    public get entry(): any {
        return this.internalEntry;
    }

    private internalEntry: any;


    constructor(
        private firebaseService: FirebaseService,
    ) { }

    public sliderChanged(event: any): void {
        this.firebaseService.updateUserVote(this.entry.$key, this.userValue, this.user).then((f) => {
            console.log("saved to fb");
        });
    }

    public delete(entry: any): void {
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}