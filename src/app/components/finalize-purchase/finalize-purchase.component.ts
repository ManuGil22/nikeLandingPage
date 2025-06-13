import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDto } from '../../api.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-finalize-purchase',
    templateUrl: './finalize-purchase.component.html',
    styleUrl: './finalize-purchase.component.scss'
})
export class FinalizePurchaseComponent implements OnInit {

    items$!: Observable<ItemDto[]>;
    visibleAlert = false;

    constructor(
        readonly cartService: CartService,
        private readonly router: Router,
    ) { }

    ngOnInit() {
        this.items$ = this.cartService.items$;
        this.cartService.isEmpty$.subscribe(isEmpty => {
            if (isEmpty) {
                this.router.navigate(['/featured']);
            }
        })
    }

    showAlert(): void {
        this.visibleAlert = true;
    }

    closeAlert(): void {
        this.visibleAlert = false;
    }
}
