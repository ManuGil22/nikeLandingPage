import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseDto, ShoeDto, ShoesDto } from '../api.model';
import { Observable } from 'rxjs';

const SHOES_BASE_URL = "https://68378bfe2c55e01d184a2365.mockapi.io/api";
const PURCHASE_BASE_URL = "https://685574de6a6ef0ed66328dbd.mockapi.io";

@Injectable({
    providedIn: 'root'
})
export class ShoesDataService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ShoesDto[]> {
        const URL = `${SHOES_BASE_URL}/shoes`
        return this.http.get<ShoesDto[]>(URL);
    }

    getShoe(shoeId: number): Observable<ShoeDto> {
        const URL = `${SHOES_BASE_URL}/shoe/${shoeId}`
        return this.http.get<ShoeDto>(URL);
    }

    makePurchase(purchase: PurchaseDto): Observable<boolean> {
        const URL = `${PURCHASE_BASE_URL}/Purchase`;
        return this.http.post<boolean>(URL, purchase);
    }
}
