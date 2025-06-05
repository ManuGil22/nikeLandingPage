import { Component, OnInit } from '@angular/core';
import { ShoesFacadeService } from '../../../services/shoes-facade.service';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {

    constructor(private readonly shoesFacade: ShoesFacadeService) { }

    ngOnInit(): void {
    }
}
