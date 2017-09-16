import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { FirebaseService } from "./firebase.service";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent implements AfterViewInit {
    @Input() public entry: any;
    @Input() public user: any;
    public classNumber: number;
    public randomcolor: any;

    public userValue: number = 0;
    public userVotes: any[];

    constructor(
        private firebaseService: FirebaseService,
    ) {
    }

    public ngAfterViewInit() {
        this.firebaseService.getUserVote(this.entry.$key, this.user).defaultIfEmpty({ vote: 50 }).subscribe((userVote) => setTimeout(() => {
            this.userValue = userVote.vote;
            this.classNumber = Math.floor((this.userValue + 9.99) / 10);
        }));
        this.firebaseService.getUserVotes(this.entry.$key).defaultIfEmpty([]).subscribe((votes) => setTimeout(() => this.userVotes = votes));
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