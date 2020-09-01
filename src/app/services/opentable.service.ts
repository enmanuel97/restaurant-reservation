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

    getRestaurants(params, page = 1) {
        const {city, country} = params;
        let query = this.getQuery(city, country, page);

        return this.http.get(`${this.url}/restaurants?per_page=15${query}`);
    }

    getRestaurantData(id) {
        return this.http.get(`${this.url}/restaurants/${id}`);
    }

    private getQuery(city, country, page) {
        let countries = JSON.parse(localStorage.getItem('countries')),
            query = '';

        if (countries.indexOf(city) > -1) {
            query = `&country=${city}`;
        } else {
            query = (typeof country === 'undefined') ? `&city=${city}&page=${page}` :  `&country=${country}&city=${city}&page=${page}`;
        }

        return query;
    }
}
