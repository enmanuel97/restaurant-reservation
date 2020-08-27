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
}
