import * as Rx from "rxjs";
import {Component, OnInit} from "@angular/core";
import {importExpr} from "@angular/compiler/src/output/output_ast";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent implements  OnInit{

    helloWorldText: String;

    ngOnInit(): void {
        this.helloWorldText = "Hello by Simon"
    }

}