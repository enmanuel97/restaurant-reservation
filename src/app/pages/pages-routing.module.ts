import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {
        path        : '',
        component   : PagesComponent,
        children    : [
            { path: '', component: HomeComponent },
            { path: 'restaurants/:city', component: RestaurantComponent },
            { path: 'restaurants/:country/:city', component: RestaurantComponent },
            { path: 'restaurant/details/:restaurantId', component: DetailComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
