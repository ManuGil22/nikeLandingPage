import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { CATEGORIES, CategoryData, getCategoryData } from '../../mapper';
import { ShoesFacadeService } from '../../services/shoes-facade.service';
import { ShoesDto } from '../../api.model';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {

    shoesList$!: Observable<ShoesDto[]>;
    categoryData!: CategoryData;
    constructor(
        private readonly route: ActivatedRoute,
		private readonly router: Router,
        private readonly shoesFacade: ShoesFacadeService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const category = params.get('category') || '';
            if (category in CATEGORIES) {
                this.categoryData = getCategoryData(category);
                this.setObservableMapper(category);
            } else {
                this.goToHome();
            }
        })
    }

    private setObservableMapper(category: string) {
        this.shoesList$ = this.shoesFacade.shoes$.pipe(map((shoes) => {
            return shoes.filter(shoe => shoe.category == category)
        }));
    }

    private goToHome() {
		this.router.navigate(['/featured']);
    }
}
