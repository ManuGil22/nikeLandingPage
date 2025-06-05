import { Injectable } from '@angular/core';
import { ShoesDto } from '../api.model';
import { ShoesDataService } from './shoes-data.service';
import { Subject, take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoesFacadeService {

    shoes$ = new Subject<ShoesDto>();

    constructor(
        private readonly shoesDataService: ShoesDataService,
    ) {
        this.fetchShoes();
    }

    fetchShoes() {
        this.shoesDataService.getAll().pipe(take(1)).subscribe(shoes => {
            this.shoes$.next(shoes);
        })
    }
}
