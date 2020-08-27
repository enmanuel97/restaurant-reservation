import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from '../auth/auth.component';
import {LoginComponent} from '../auth/login/login.component';
import {RegisterComponent} from '../auth/register/register.component';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {RestaurantComponent} from './restaurant/restaurant.component';

const routes: Routes = [
  {
    path        : '',
    component   : PagesComponent,
    children    : [
      { path: '',             component: HomeComponent },
      { path: 'restaurants',          component: RestaurantComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
