import { DataService } from "../data.service";
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
        private dataService: DataService,
        @Inject(APP_CONFIG) private config: IAppConfig,
    ) {
        const url = this.config.apiEndpoint + "/api/cleanfood/image/uploadAndAnalyze";
        this.uploader = new FileUploader({
            url: url,
        });

        this.uploader.onAfterAddingFile = this.onFileAdded;
        this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
            this.createFoodEntry(+response);
        };
    }

    public upload(fileitem: any): void {
        fileitem.upload();
    }

    public isMobileDevice(): boolean {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    }

    private onFileAdded(file: FileItem): void {
        file.withCredentials = false;
        file.upload();
    }

    private createFoodEntry(imageId: number) {
        const entry = {
            imageUrl: this.config.apiEndpoint + "/api/cleanfood/image/" + imageId,
            imageThumbnailUrl: this.config.apiEndpoint + "/api/cleanfood/image/thumb/" + imageId,
            user: {
                uid: this.user.uid,
                displayName: this.user.displayName,
                avatarUrl: this.user.photoURL,
            },
        };

        this.firebase.createFoodEntry(entry).then((f) => {
            const entryId = f.key;
            this.dataService.notifyProcess(entryId, imageId).subscribe((f) => {
                console.log("notifyProcess ", f);
            });
        });
    }
}
