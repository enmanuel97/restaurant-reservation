import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {OpentableService} from '../../services/opentable.service';

@Component({
    selector    : 'app-home',
    templateUrl : './home.component.html',
    styleUrls   : ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public countries: any[] = [];
    public cities: any[] = [];

    constructor(private title: Title, private opentableService: OpentableService) {
        this.title.setTitle('Home | Restaurant Reservation System');
        this.loadData();
    }

    ngOnInit(): void {

    }

    private loadData() {
        const lsCountries = this.getLocalStorageData('countries'),
              lsCities = this.getLocalStorageData('cities');

        if(lsCountries === null) {
            this.opentableService.getCountries().subscribe((data: any) => {
                this.countries = data.countries;
            });
        }

        if(lsCities === null) {
            this.opentableService.getCities().subscribe((data: any) => {
                this.cities = data.cities;
            });
        }
    }

    private setLocalStorageData(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    private getLocalStorageData(key: string) {
        return localStorage.getItem(key);
    }
}
