import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category-card',
    templateUrl: './category-card.component.html',
    styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {

    @Input() categoryCardData!: CategoryCardData;

    constructor(){}
}

export interface CategoryCardData {
    imgSrc: string,
    categoryName: string,
    categoryRef: string
}