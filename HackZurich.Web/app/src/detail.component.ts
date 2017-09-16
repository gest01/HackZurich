import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { FirebaseService } from "./firebase.service";
import * as $ from "jquery";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent implements AfterViewInit {
    @Input()
    public entry: any;
    public userValue: any = 0;

    constructor(
        private firebaseService: FirebaseService,
    ) {
    }

    public ngAfterViewInit() {
        this.firebaseService.getUserVote(this.entry.$key).defaultIfEmpty({vote: 50}).subscribe((userVote) => this.userValue = userVote.vote);
    }

    public sliderChanged(event: any): void {
        this.firebaseService.updateUserVote(this.entry.$key, this.userValue).then((f) => {
            console.log("saved to fb");
        });
    }

    public delete(entry: any): void {
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}