import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class VerifyAuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        let accessToken = localStorage.getItem('userData') || '';

        if (accessToken !== '') {
            this.router.navigateByUrl('/reservations');
            return false;
        }

        return true;
    }
}
