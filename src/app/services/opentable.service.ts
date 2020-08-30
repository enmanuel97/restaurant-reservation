import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OpentableService {
    private url = 'https://opentable.herokuapp.com/api';

    constructor(private http: HttpClient) {

    }

    getCountries() {
        return this.http.get(`${this.url}/countries`);
    }

    getCities() {
        return this.http.get(`${this.url}/cities`);
    }

    getRestaurants(params) {
        const {city, country} = params,
            query = (typeof country === 'undefined') ? `&city=${city}` :  `&country=${country}&city=${city}`;
        return this.http.get(`${this.url}/restaurants?per_page=15${query}`);
    }

    getRestaurantData(id) {
        return this.http.get(`${this.url}/restaurants/${id}`);
    }
}
