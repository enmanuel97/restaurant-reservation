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
    public Arr: Array<number>;
    public city: string;
    public country: string;
    constructor(private activatedRoute: ActivatedRoute, private opentableService: OpentableService) {
        this.activatedRoute.params.subscribe(params => {
            this.opentableService.getRestaurants(params).subscribe((data: any) => {
                console.log(data);
                this.restaurants = data;
                this.city = params['city'];
                this.country = params['country'];
            });
        });
    }

    ngOnInit(): void {
    }
}
