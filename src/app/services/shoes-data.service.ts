import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoesDto } from '../api.model';
import { Observable } from 'rxjs';

const BASE_URL = "https://68378bfe2c55e01d184a2365.mockapi.io/api/shoes"

@Injectable({
    providedIn: 'root'
})
export class ShoesDataService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ShoesDto> {
        return this.http.get<ShoesDto>(BASE_URL);
    }
}
