import * as Rx from "rxjs";
import { Component, OnInit } from "@angular/core";
import { importExpr } from "@angular/compiler/src/output/output_ast";
import { DataService } from "./data.service";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {

    public helloWorldText: string;

    constructor(private dataService: DataService) {

    }

    public ngOnInit(): void {
        this.helloWorldText = "Hello by Simon";

        this.dataService.getData().subscribe((f) => {
            console.log("result = ", f);
        });
    }
}