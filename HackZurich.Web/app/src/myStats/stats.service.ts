import { Injectable } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import * as Rx from "rxjs";

@Injectable()
export class StatsService {

    constructor(
        private firebase: FirebaseService,
    ) { }


    public getAverageEntryScore(entryId: string): Rx.Observable<any> {
        return this.firebase.getEntry(entryId).map((entry: any) => {
            return this.calculateStats(entry);
        });
    }

    private calculateStats(entry: any): any {

        const stat = {
            entryScore: 0,
        };

        if (entry.votes) {
            const keys = Object.keys(entry.votes);
            if (keys.length > 0) {
                for (const key of keys) {
                    stat.entryScore += entry.votes[key].vote;
                }

                stat.entryScore = stat.entryScore / keys.length;
            }
        }

        if (entry.foodFacts.healthscore) {
            stat.entryScore += entry.foodFacts.healthscore;
            stat.entryScore = stat.entryScore / 2;
        }

        return stat;
    }
}