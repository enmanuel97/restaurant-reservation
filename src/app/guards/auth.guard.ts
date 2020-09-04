import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        let accessToken = localStorage.getItem('userData') || '';

        if (accessToken === '') {
            this.router.navigateByUrl('/auth/login');
            return false;
        }

        return true;
    }
}
