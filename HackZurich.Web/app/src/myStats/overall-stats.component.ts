import { StatsService } from "./stats.service";
import { Component, OnInit, Input } from "@angular/core";
import * as Rx from "rxjs";
import { FirebaseObjectObservable } from "angularfire2/database";
import { FirebaseService } from "../firebase.service";

@Component({
    selector: "overall-stats",
    templateUrl: "overall-stats.component.html",
})

export class OverallStatsComponent implements OnInit {
    public itemScore: number;
    @Input() public user: any;

    constructor(
        private firebaseService: FirebaseService,
        private statsService: StatsService,
    ) {
        this.itemScore = 0;
    }

    public ngOnInit(): void {

        this.statsService.getUserHealthScore(this.user.uid).subscribe((userHealtScore) => {
            const total = Math.floor(userHealtScore * 10) / 10;
            const timer = setInterval(() => {
                if (this.itemScore < total) {
                    this.itemScore++;
                } else {
                    this.itemScore = total;
                    clearInterval(timer);
                }
            }, 25);

        });
    }
}