import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-category-card',
    templateUrl: './category-card.component.html',
    styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {

    @Input() categoryData!: categoryData;

    constructor(){}
}

export interface categoryData {
    imgSrc: string,
    categoryName: string,
    categoryRef: string
}