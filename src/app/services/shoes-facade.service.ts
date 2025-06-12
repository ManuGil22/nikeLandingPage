import { Injectable } from '@angular/core';
import { ShoesDto } from '../api.model';
import { ShoesDataService } from './shoes-data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoesFacadeService {

    private shoesSubject = new BehaviorSubject<ShoesDto[]>([]);
    shoes$ = this.shoesSubject.asObservable();
    shoes!: ShoesDto[];

    constructor(private readonly shoesDataService: ShoesDataService) {
        this.fetchShoes();
    }

    fetchShoes() {
        this.shoesDataService.getAll().subscribe(shoes => {
            this.shoesSubject.next(shoes);
            this.shoes = shoes;
        });
    }
}
