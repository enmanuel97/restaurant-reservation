import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule) },
    { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) },
    { path: '**', pathMatch: 'full',  component: NopagefoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
