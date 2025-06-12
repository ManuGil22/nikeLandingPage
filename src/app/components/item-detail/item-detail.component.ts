import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ShoeDto } from '../../api.model';
import { ShoesDataService } from '../../services/shoes-data.service';
import { getCategoryLabel, SIZES } from '../../mapper';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent implements OnInit {

    shoeData!: ShoeDto;
    mainImage: string = '';
    mainItemIndex: number = 0;
    sizeSelected!: number;
    getCategoryLabel = getCategoryLabel;
    SIZES = SIZES;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly shoesDataService: ShoesDataService,
    ) { }

    ngOnInit() {
        this.route.paramMap.pipe(take(1)).subscribe(params => {
            const shoeId = params.get('shoeId');
            if (shoeId) {
                this.fetchShoeData(+shoeId);
            } else {
                this.goToHome();
            }
        })
    }

    private fetchShoeData(shoeId: number){
        this.shoesDataService.getShoe(shoeId).subscribe((shoe: ShoeDto) => {
            this.shoeData = shoe;
            this.mainImage = shoe.imgs[0];
        })
    }

    private goToHome() {
		this.router.navigate(['/featured']);
    }

    changeSelectedShoe(imgIndex: number) {
        this.mainImage = this.shoeData.imgs[imgIndex];
        this.mainItemIndex = imgIndex;
        this.sizeSelected = 0;
    }

    hasSizeAvailable(size: number): boolean {
        return this.shoeData.sizes[this.mainItemIndex].includes(size);
    }

    setSizeSelected(size: number) {
        this.sizeSelected = size;
    }
}
