import { Injectable } from "@angular/core";
import { FirebaseService } from "../firebase.service";

@Injectable()
export class StatsService {

    constructor(
        private firebase: FirebaseService,
    ) { }
}