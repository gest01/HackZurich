import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "./firebase.service";
import * as Rx from "rxjs";
import { FirebaseObjectObservable } from "angularfire2/database";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent implements OnInit {
    @Input() public user: any;
    @Input() public entry: any;

    public classNumber: number;

    public userValue: any;
    public userVotes: any[] = [];

    constructor(
        private firebaseService: FirebaseService,
    ) { }

    public ngOnInit(): void {
        this.firebaseService.getUserVote(this.entry.$key, this.user).subscribe((value) => {

            if (!value.vote) {
                value.vote = 1;
            }

            this.userValue = value.vote;
            this.classNumber = Math.floor((value.vote + 9.99) / 10);
        });

        this.firebaseService.getUserVotes(this.entry.$key).defaultIfEmpty([]).subscribe((votes) => {
            this.userVotes = votes;
        });
    }

    public sliderChanged(event: any): void {
        this.firebaseService.updateUserVote(this.entry.$key, this.userValue, this.user).then((f) => {
            console.log("saved to fb");
        });
    }

    public delete(entry: any): void {
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}