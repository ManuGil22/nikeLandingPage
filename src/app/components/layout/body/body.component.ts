import { Component, OnInit } from '@angular/core';
import { ShoesDataService } from '../../../services/shoes-data.service';
import { take } from 'rxjs';
import { ShoesDto } from '../../../api.model';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit{

    shoes!: ShoesDto;

    constructor (
        private readonly shoesDataService: ShoesDataService,
    ) {}

    ngOnInit(): void {
        this.shoesDataService.getAll().pipe(take(1)).subscribe(shoes => {
            this.shoes = shoes;
        })
    }
}
