import { Injectable } from '@angular/core';
import { ItemDto } from '../api.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private openModalCallback: (() => void) | null = null;
    private items: ItemDto[] = [];
    private itemsSubject = new BehaviorSubject<ItemDto[]>(this.items);
    items$ = this.itemsSubject.asObservable();
    private isEmptySubject = new BehaviorSubject<boolean>(true);
    isEmpty$ = this.isEmptySubject.asObservable();

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
        this.isEmptySubject.next(this.items.length == 0);
        this.itemsSubject.next(this.items);
    }

    private geItemIfAlreadyInCart(shoe: ItemDto): ItemDto | null {
        return this.items.find(item => (item.shoeId == shoe.shoeId) && (item.size == shoe.size) && (item.color == shoe.color)) || null;
    }

    getTotal(): number {
        return this.items.reduce((acc, item) => acc + item.precio * item.qty, 0);
    }

    deleteCart() {
        this.items = [];
        this.isEmptySubject.next(this.items.length == 0);
        this.itemsSubject.next(this.items);
    }

    deleteFromCart(item: ItemDto) {
        const index = this.items.indexOf(item, 0);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        this.isEmptySubject.next(this.items.length == 0);
        this.itemsSubject.next(this.items);
    }
}
