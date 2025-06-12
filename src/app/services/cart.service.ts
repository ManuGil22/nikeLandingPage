import { Injectable } from '@angular/core';
import { ItemDto } from '../api.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private openModalCallback: (() => void) | null = null;
    private items: ItemDto[] = [];
    private itemsSubject = new Subject<ItemDto[]>();
    items$ = this.itemsSubject.asObservable();

    registerOpenCallback(callback: () => void) {
        this.openModalCallback = callback;
    }

    openCart() {
        this.openModalCallback?.();
    }

    addItem(shoe: ItemDto) {
        if (this.itemAlreadyInCart(shoe)) {
            let shoe: any = this.items.find(item => item.shoeId == shoe.shoeId);
            shoe.qty = shoe.qty++;
        } else {
            this.items.push(shoe);
        }
        this.openCart();
        this.itemsSubject.next(this.items);
    }

    getItems() {
        return this.items;
    }

    private itemAlreadyInCart(shoe: ItemDto): boolean {
        return !!(this.items.find(item => (item.shoeId == shoe.shoeId) && (item.size == shoe.size)));
    }
}
