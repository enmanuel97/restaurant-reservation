import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [PagesComponent, HomeComponent, RestaurantComponent, DetailComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent, HomeComponent, RestaurantComponent, DetailComponent
  ]
})
export class PagesModule { }
