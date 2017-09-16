import { DataService } from "../data.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { IAppConfig, APP_CONFIG } from "../app.config";

@Component({
    selector: "file-upload",
    templateUrl: "fileupload.component.html",
})

export class FileUploadComponent implements OnInit {

    public uploader: FileUploader;

    constructor(
        private dataService: DataService,
        @Inject(APP_CONFIG) private config: IAppConfig,
    ) {
        this.uploader = new FileUploader({ url: "http://www.google.dch" });
    }

    public ngOnInit() {
        console.log(this.uploader);
    }
}