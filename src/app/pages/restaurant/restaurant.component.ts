import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    private params: any;
    public p: number = 1;
    constructor(private activatedRoute: ActivatedRoute, private opentableService: OpentableService, private router: Router) {
        this.activatedRoute.params.subscribe(params => {
            this.loading = true;
            this.params = params;
            this.opentableService.getRestaurants(params, this.p).subscribe((data: any) => {
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
        this.p = page;

        this.opentableService.getRestaurants(this.params, page).subscribe((data: any) => {
            this.restaurants    = data;
            this.loading        = false;
        });
    }
}
