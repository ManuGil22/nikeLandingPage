import { Component, Input } from '@angular/core';
import { ShoesDto } from '../../api.model';
import { getCategoryLabel } from '../../mapper';

@Component({
    selector: 'app-item-card',
    templateUrl: './item-card.component.html',
    styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {

    @Input() shoe!: ShoesDto;
    getCategoryLabel = getCategoryLabel;

    constructor() { }
}
