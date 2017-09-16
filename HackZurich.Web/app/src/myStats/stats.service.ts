import { Injectable } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import * as Rx from "rxjs";

@Injectable()
export class StatsService {

    constructor(
        private firebase: FirebaseService,
    ) { }

    public getAverageUserScore(userId: string): Rx.Observable<any> {
        return this.firebase.list("/entries").map((entry) => {
            return {
                xxx: "222",
            };
        });
    }

    public getDetailStats(entryId: string, userId: string): Rx.Observable<any> {
        return this.firebase.getEntry(entryId).map((entry: any) => {
            return this.calculateStats(entry);
        });
    }

    private calculateStats(entry: any): any {
        return {
            name: "sdf jkl asdf klö sdf ö asdfklö",
        };
    }
}