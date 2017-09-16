import { Component, OnInit, Input } from "@angular/core";
import { FirebaseService } from "./firebase.service";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent {
    @Input() public entry: any;

    constructor(
        private firebaseService: FirebaseService,
    ) { }

    public voteUp(entry: any): void {
        console.log("voteUp...", entry);
    }

    public voteDown(entry: any): void {
        console.log("voteDown...", entry);
    }

    public delete(entry: any): void {
        console.log("delete...", entry);
        this.firebaseService.deleteItem("/entries/" + entry.$key);
    }
}