import { Component, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";

@Component({
    selector: "file-upload",
    templateUrl: "fileupload.component.html",
})

export class FileUploadComponent implements OnInit {

    public uploader: FileUploader = new FileUploader({ url: "http://www.google.dch" });

    constructor() { }

    ngOnInit() { }
}