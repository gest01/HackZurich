import { DataService } from "../data.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { IAppConfig, APP_CONFIG } from "../app.config";

@Component({
    selector: "file-upload",
    templateUrl: "fileupload.component.html",
})

export class FileUploadComponent  {

    public uploader: FileUploader;

    constructor(
        private dataService: DataService,
        @Inject(APP_CONFIG) private config: IAppConfig,
    ) {
        this.uploader = new FileUploader({ url:  this.config.apiEndpoint + "/api/cleanfood/image/uploadAndAnalyze" });
    }

    public upload(fileitem: any): void {
        fileitem.upload();
        console.log(fileitem);
    }
}