import { Component } from '@angular/core';
import { ShoesFacadeService } from '../../services/shoes-facade.service';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrl: './featured.component.scss'
})
export class FeaturedComponent {

    constructor(readonly shoesFacade: ShoesFacadeService) {}
}
