import { Component, Input } from '@angular/core';
import { ItemDto } from '../../api.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
    @Input() item!: ItemDto;

    constructor(
        readonly cartService: CartService,
    ){}

    deleteFromCart(item: ItemDto) {
        this.cartService.deleteFromCart(item);
    }
}
