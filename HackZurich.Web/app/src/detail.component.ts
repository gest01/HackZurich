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
    public userValue: any;
    private user: any;

    constructor(
        private firebaseService: FirebaseService,
    ) {
        this.userValue = 50;
        this.firebaseService.user().subscribe((user) => this.user = user);
    }

    public ngAfterViewInit() {
        // set background styles??
    }

    public sliderChanged(event: any): void {
        const voteObject: any = {
            vote: this.userValue,
        };
        console.log("voted: ", voteObject);
        this.firebaseService.set("/entries/" + this.entry.$key + "/votes/" + this.user.uid, voteObject);
    }

    public delete(entry: any): void {
        console.log("delete...", entry);
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}