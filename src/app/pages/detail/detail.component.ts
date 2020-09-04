import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OpentableService} from '../../services/opentable.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector    : 'app-detail',
    templateUrl : './detail.component.html',
    styleUrls   : ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    public restaurant: any;
    public loading: boolean;
    public zoom = 18;

    constructor(private activatedRoute: ActivatedRoute, private opentableService: OpentableService, private authService: AuthService, private router: Router) {
        this.activatedRoute.params.subscribe(params => {
            this.loading = true;
            this.opentableService.getRestaurantData(params['restaurantId']).subscribe((data: any) => {
                this.restaurant = data;
                this.loading = false;
            });
        });
    }

    ngOnInit(): void {
    }

    makeReservation(restaurantId) {
        if(this.authService.userData.is_logged_in === 1) {

        } else {
            this.router.navigateByUrl('/auth/login');
        }
    }
}
