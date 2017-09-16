import { Component, OnInit, Inject, Input } from "@angular/core";
import { FileUploader, FileItem, ParsedResponseHeaders } from "ng2-file-upload";
import { IAppConfig, APP_CONFIG } from "../app.config";
import { FirebaseService } from "../firebase.service";

@Component({
    selector: "file-upload",
    templateUrl: "fileupload.component.html",
})

export class FileUploadComponent {
    @Input() public user: any;
    public uploader: FileUploader;

    constructor(
        private firebase: FirebaseService,
        @Inject(APP_CONFIG) private config: IAppConfig,
    ) {
        const url = this.config.apiEndpoint + "/api/cleanfood/image/uploadAndAnalyze";
        this.uploader = new FileUploader({
            url: url,
        });

        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
            this.createFoodEntry(+response);
        };
    }

    public upload(fileitem: any): void {
        fileitem.upload();
    }

    private createFoodEntry(imageId: number) {
        const entry = {
            imageUrl: "http://hackzurich-api.azurewebsites.net/api/cleanfood/image/" + imageId,
            user: {
                uid: this.user.uid,
                displayName: this.user.displayName,
                avatarUrl: this.user.photoURL,
            },
        };

        this.firebase.createFoodEntry(entry).then((f) => {
            console.log("YES", f.key());
        });
    }
} 
