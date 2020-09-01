import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {AuthService} from '../../services/auth.service';

@Component({
    selector    : 'app-login',
    templateUrl : './login.component.html',
    styleUrls   : ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private title: Title, private authService: AuthService) {
        this.title.setTitle('Sign In | Restaurant Reservation System');
    }

    ngOnInit(): void {
    }

    logInFB() {
        this.authService.FacebookAuth();
    }
}
