import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OpentableService} from '../../services/opentable.service';

@Component({
    selector    : 'app-restaurant',
    templateUrl : './restaurant.component.html',
    styleUrls   : ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    public restaurants: any;
    public city: string;
    public country: string;
    public loading: boolean;
    public page = 1;
    constructor(private activatedRoute: ActivatedRoute, private opentableService: OpentableService) {
        this.activatedRoute.params.subscribe(params => {
            this.loading = true;
            this.opentableService.getRestaurants(params).subscribe((data: any) => {
                this.restaurants = data;
                this.city       = params['city'];
                this.country    = params['country'];
                this.loading    = false;
            });
        });
    }

    ngOnInit(): void {
    }

    changePage(page: number) {
        this.loading = true;
        const city = this.city,
            country = this.country;
        this.opentableService.getRestaurants({city, country}, page).subscribe((data: any) => {
            this.restaurants = data;
            this.loading    = false;
        });
    }
}
