import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Modal } from 'bootstrap';
import { Observable } from 'rxjs';
import { ItemDto } from '../../api.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, AfterViewInit {
    @ViewChild('cartModal') modalElementRef!: ElementRef;
    private modalInstance: any;

    items$!: Observable<ItemDto[]>;

    constructor(readonly cartService: CartService) { }

    ngOnInit() {
        this.items$ = this.cartService.items$;
    }

    ngAfterViewInit() {
        this.modalInstance = new Modal(this.modalElementRef.nativeElement);
        this.cartService.registerOpenCallback(() => this.openModal());
    }

    openModal() {
        this.modalInstance.show();
    }

    deleteCart() {
        this.cartService.deleteCart();
    }
}
