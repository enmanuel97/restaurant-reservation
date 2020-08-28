import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailComponent } from './detail/detail.component';
import {CountryNamePipe} from '../pipes/country-name.pipe';
import {FillPipe} from '../pipes/fill.pipe';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        RestaurantComponent,
        DetailComponent,
        CountryNamePipe,
        FillPipe,
    ],
    imports: [
        CommonModule,
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
