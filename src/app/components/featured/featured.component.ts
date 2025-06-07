import { Component } from '@angular/core';
import { ShoesFacadeService } from '../../services/shoes-facade.service';
import { categoryData } from '../category-card/category-card.component';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrl: './featured.component.scss'
})
export class FeaturedComponent {

    readonly menCategory: categoryData = {
        categoryName: 'Hombres',
        categoryRef: '/men',
        imgSrc: '/assets/men.webp'
    }

    readonly womenCategory: categoryData = {
        categoryName: 'Mujeres',
        categoryRef: '/women',
        imgSrc: '/assets/women.webp'
    }

    readonly kidsCategory: categoryData = {
        categoryName: 'Niños',
        categoryRef: '/kids',
        imgSrc: '/assets/kids.webp'
    }

    constructor(readonly shoesFacade: ShoesFacadeService) {}
}
