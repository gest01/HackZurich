import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent {
    @Input() public entry: any;

    constructor() { }

    public voteUp(entry: any): void {
        console.log("voteUp...", entry);
    }

    public voteDown(entry: any): void {
        console.log("voteDown...", entry);
    }
}