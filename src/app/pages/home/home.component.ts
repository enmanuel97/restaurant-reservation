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
    public trendingCities: any[] = [];

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
                this.setLocalStorageData('countries', JSON.stringify(data.countries));
            });
        }

        if(lsCities === null) {
            this.opentableService.getCities().subscribe((data: any) => {
                this.cities = data.cities;
                this.setLocalStorageData('cities', JSON.stringify(data.cities));
            });
        }

        if(lsCountries !== null && lsCities !== null) {
            this.cities     = JSON.parse(this.getLocalStorageData('cities'));
            this.countries  = JSON.parse(this.getLocalStorageData('countries'));
        }

        this.getTrendingCities();
    }

    private setLocalStorageData(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    private getLocalStorageData(key: string) {
        return localStorage.getItem(key);
    }

    private getTrendingCities() {
        for (let i = 0; i < 7; i++) {
            const className = (i == 0 || i == 3) ? 'col-lg-8' : 'col-lg-4';
            const element = this.randomProperty(this.cities);
            this.trendingCities.push({class: className, name: element});
        }
    }

    private randomProperty (obj) {
        var keys = Object.keys(obj);
        return obj[keys[ keys.length * Math.random() << 0]];
    };
}
