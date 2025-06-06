import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-header',
    templateUrl: './image-header.component.html',
    styleUrl: './image-header.component.scss'
})
export class ImageHeaderComponent {
    @Input() headerSrc!: string;

    constructor() { }
}
