import { Component, OnInit, Input } from "@angular/core";
import * as Rx from "rxjs";
import { FirebaseObjectObservable } from "angularfire2/database";
import { FirebaseService } from "../firebase.service";
import { StatsService } from "./stats.service";

@Component({
    selector: "stats-item",
    templateUrl: "stats-item.component.html",
})

export class StatsItemComponent implements OnInit {

    public userScore: number;
    public itemScore: number;

    @Input() public user: any;
    @Input() public entry: any;

    public classNumber: number;

    public userValue: any;
    public userVotes: any[] = [];

    constructor(
        private firebaseService: FirebaseService,
        private statsService: StatsService,
    ) { }

    public ngOnInit(): void {
        this.firebaseService.getUserVote(this.entry.$key, this.user).subscribe((value) => {

            if (!value.vote) {
                value.vote = 1;
            }

            this.userValue = value.vote;
        });

        this.firebaseService.getUserVotes(this.entry.$key).defaultIfEmpty([]).subscribe((votes) => {
            this.userVotes = votes;
        });

        this.statsService.getAverageEntryScore(this.entry.$key).subscribe((stats) => {
            this.itemScore = Math.floor(stats.entryScore * 10) / 10;
            this.classNumber = Math.floor((this.itemScore + 9.99) / 10);
            this.userScore = Math.floor(stats.averageUserRating * 10) / 10;
        });
    }

    public delete(entry: any): void {
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}