import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-banner',
    templateUrl: './image-banner.component.html',
    styleUrl: './image-banner.component.scss'
})
export class ImageBannerComponent {
    @Input() bannerSrc!: string;

    constructor() { }
}
