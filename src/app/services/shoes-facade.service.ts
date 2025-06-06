import { Injectable } from '@angular/core';
import { ShoesDto } from '../api.model';
import { ShoesDataService } from './shoes-data.service';
import { Subject, take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoesFacadeService {

    private shoesSubject = new Subject<ShoesDto[]>();
    shoes$ = this.shoesSubject.asObservable();

    constructor(
        private readonly shoesDataService: ShoesDataService,
    ) {
        this.fetchShoes();
    }

    fetchShoes() {
        this.shoesDataService.getAll().pipe(take(1)).subscribe(shoes => {
            this.shoesSubject.next(shoes);
        })
    }
}
