import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoeDto, ShoesDto } from '../api.model';
import { Observable } from 'rxjs';

const BASE_URL = "https://68378bfe2c55e01d184a2365.mockapi.io/api"

@Injectable({
    providedIn: 'root'
})
export class ShoesDataService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ShoesDto[]> {
        const URL = `${BASE_URL}/shoes`
        return this.http.get<ShoesDto[]>(URL);
    }

    getShoe(shoeId: number): Observable<ShoeDto> {
        const URL = `${BASE_URL}/shoe/${shoeId}`
        return this.http.get<ShoeDto>(URL);
    }
}
