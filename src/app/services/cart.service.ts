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

    constructor() { }

    registerOpenCallback(callback: () => void) {
        this.openModalCallback = callback;
    }

    openCart() {
        this.openModalCallback?.();
    }

    addItem(shoe: ItemDto) {
        let oldShoe = this.geItemIfAlreadyInCart(shoe)
        if (oldShoe) {
            oldShoe.qty = oldShoe.qty + 1;
        } else {
            this.items.push(shoe);
        }
        this.openCart();
        this.itemsSubject.next(this.items);
    }

    getItems() {
        return this.items;
    }

    private geItemIfAlreadyInCart(shoe: ItemDto): ItemDto | null {
        return this.items.find(item => (item.shoeId == shoe.shoeId) && (item.size == shoe.size) && (item.color == shoe.color)) || null;
    }

    getTotal(): number {
        return this.items.reduce((acc, item) => acc + item.precio * item.qty, 0);
    }

    deleteCart() {
        this.items = [];
        this.itemsSubject.next(this.items);
    }

    deleteFromCart(item: ItemDto) {
        const index = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
