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
    ) { }

    public ngOnInit(): void {

        this.statsService.getUserHealthScore(this.user.uid).subscribe((userHealtScore) => {
            this.itemScore = Math.floor(userHealtScore * 10) / 10;
        });
    }
}