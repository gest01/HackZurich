import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "detail-item",
    templateUrl: "detail.component.html",
})

export class DetailComponent {
    @Input() public item: any;

    constructor() { }

    public voteUp(item: any): void {
        console.log("voteUp...", item);
    }

    public voteDown(item: any): void {
        console.log("voteDown...", item);
    }
}