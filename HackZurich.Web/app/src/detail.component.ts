import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "./firebase.service";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent {
    @Input() public entry: any;
    public userValue: any;

    constructor(
        private firebaseService: FirebaseService,
    ) {
        this.userValue = 50;
    }

    public voteUp(entry: any): void {
    }

    public voteDown(entry: any): void {
    }

    public delete(entry: any): void {
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}