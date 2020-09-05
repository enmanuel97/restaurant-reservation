import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailComponent } from './detail/detail.component';
import { CountryNamePipe } from '../pipes/country-name.pipe';
import { FillPipe } from '../pipes/fill.pipe';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReservationsComponent } from './reservations/reservations.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        RestaurantComponent,
        DetailComponent,
        CountryNamePipe,
        FillPipe,
        ReservationsComponent,
    ],
	imports: [
        CommonModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCdKZGO36if8kNOZ8V5GG_r9QFjTDrrKe4'
		}),
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
		PagesRoutingModule,
		SharedModule,
	],
    exports: [
        PagesComponent,
        HomeComponent,
        RestaurantComponent,
        DetailComponent
    ]
})
export class PagesModule { }
