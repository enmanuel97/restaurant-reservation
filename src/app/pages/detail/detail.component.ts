import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OpentableService} from '../../services/opentable.service';
import {AuthService} from '../../services/auth.service';
import {ReservationService} from '../../services/reservation.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector    : 'app-detail',
    templateUrl : './detail.component.html',
    styleUrls   : ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    public restaurant: any;
    public loading: boolean;
    public zoom = 18;
    public modalRef         : BsModalRef;
    public isLoading        : boolean               = false;
    public formSubmitted    : boolean               = false;

    public reservationForm: FormGroup;

    constructor(private activatedRoute: ActivatedRoute, private modalService: BsModalService, private fb: FormBuilder, private reservationService: ReservationService, private opentableService: OpentableService, public authService: AuthService, private router: Router) {
        this.activatedRoute.params.subscribe(params => {
            this.loading = true;
            this.opentableService.getRestaurantData(params['restaurantId']).subscribe((data: any) => {
                this.restaurant = data;
                this.loading = false;
            });
        });
    }

    ngOnInit(): void {
        this.reservationForm = this.fb.group({
            name                : [this.authService.userData.displayName],
            quantity            : [1],
            reservation_date    : [new Date()]
        });
    }

    showReservationModal(template: TemplateRef<any>) {
        if(this.authService.userData.is_logged_in === 1) {
            this.modalRef = this.modalService.show(
                template,
                Object.assign({}, { class: '' }),
            );
        } else {
            this.router.navigateByUrl('/auth/login');
        }
    }

    saveReservationData() {
        this.reservationService.newReservation(this.restaurant, this.reservationForm.value);
        this.modalRef.hide();
    }

    private getCurrentDate(): string{
        let currentDate = new Date();
        let day:any = currentDate.getDate();
        let month:any = currentDate.getMonth() + 1;
        let year:any = currentDate.getFullYear();
        let dateInApiFormat: string;

        if(day<10){
            day = '0' + day.toString();
        }
        if(month<10){
            month = '0' + month.toString();
        }
        dateInApiFormat = day + '/' + month + '/' + year.toString();
        return dateInApiFormat;
    }
}
