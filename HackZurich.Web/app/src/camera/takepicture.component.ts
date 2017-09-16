import { Component, OnInit } from "@angular/core";

@Component({
    selector: "take-picture",
    templateUrl: "takepicture.component.html",
})

export class TakePictureComponent implements OnInit {
    constructor() { }
    public ngOnInit() { }

    public takePicture(): void {

    }

    // public init(navigator: any): void {
    //     const streaming = false;
    //     const video: any = document.querySelector("#video");
    //     const canvas = document.querySelector("#canvas");
    //     const photo = document.querySelector("#photo");
    //     const startbutton = document.querySelector("#startbutton");
    //     const width = 320;
    //     const height = 0;

    //     navigator.getMedia = (navigator.getUserMedia ||
    //         navigator.webkitGetUserMedia ||
    //         navigator.mozGetUserMedia ||
    //         navigator.msGetUserMedia);

    //     navigator.getMedia(
    //         {
    //             video: true,
    //             audio: false,
    //         },
    //         (stream: any) => {
    //             if (navigator.mozGetUserMedia) {
    //                 video.mozSrcObject = stream;
    //             } else {
    //                 const vendorURL = window.URL || window.webkitURL;
    //                 video.src = vendorURL.createObjectURL(stream);
    //             }
    //             video.play();
    //         },
    //         (err: any) => {
    //             console.log("An error occured! " + err);
    //         },
    //     );
    // }
}