import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import Cropper from "cropperjs";

@Component({
    selector: 'image-cropper',
    templateUrl: './image-croppper.component.html',
    styleUrls: ['./image-croppper.component.css']
})
export class ImageCroppperComponent implements OnInit {

    @ViewChild("image", { static: false })
    public imageElement: ElementRef;

    @Input("src")
    public imageSource: string;

    public imageDestination: string;
    private cropper: Cropper;

    public constructor() {
        this.imageDestination = "";
    }

    public ngAfterViewInit() {
        this.cropper = new Cropper(this.imageElement.nativeElement, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
            crop: () => {
                const canvas = this.cropper.getCroppedCanvas();
                this.imageDestination = canvas.toDataURL("image/png");
            }
        });
    }

    public ngOnInit() { }

}
