import { Component } from '@angular/core';
import { ShoesFacadeService } from '../../services/shoes-facade.service';
import { CategoryCardData } from '../category-card/category-card.component';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrl: './featured.component.scss'
})
export class FeaturedComponent {

    readonly menCategory: CategoryCardData = {
        categoryName: 'Hombres',
        categoryRef: '/men',
        imgSrc: '/assets/men.webp'
    }

    readonly womanCategory: CategoryCardData = {
        categoryName: 'Mujeres',
        categoryRef: '/woman',
        imgSrc: '/assets/woman.webp'
    }

    readonly kidsCategory: CategoryCardData = {
        categoryName: 'Niños',
        categoryRef: '/kids',
        imgSrc: '/assets/kids.webp'
    }

    constructor(readonly shoesFacade: ShoesFacadeService) {}
}
