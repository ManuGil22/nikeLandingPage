import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDto, PurchaseDto } from '../../api.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { PurchaseData } from '../purchase-form/purchase-form.component';
import { ShoesDataService } from '../../services/shoes-data.service';

@Component({
    selector: 'app-finalize-purchase',
    templateUrl: './finalize-purchase.component.html',
    styleUrl: './finalize-purchase.component.scss'
})
export class FinalizePurchaseComponent implements OnInit {

    items!: ItemDto[];
    visibleAlert = false;

    constructor(
        readonly cartService: CartService,
        private readonly shoesDataService: ShoesDataService,
        private readonly router: Router,
    ) { }

    ngOnInit() {
        this.cartService.items$.subscribe(items => {
            this.items = items;
        });
        this.cartService.isEmpty$.subscribe(isEmpty => {
            if (isEmpty) {
                this.router.navigate(['/featured']);
            }
        })
    }

    finalizePurchase(purchaseData: PurchaseData) {
        const newPurchase = this.mapToPurchaseDto(purchaseData);
        this.shoesDataService.makePurchase(newPurchase).subscribe(purchased => {
            if (purchased) {
                this.visibleAlert = true;
            }
        })
    }

    private mapToPurchaseDto(purchaseData: PurchaseData): PurchaseDto {
        return {
            shoes: this.items,
            ...purchaseData
        }
    }

    closeAlert(): void {
        this.visibleAlert = false;
    }
}
