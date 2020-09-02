import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector    : 'app-login',
    templateUrl : './login.component.html',
    styleUrls   : ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private title: Title, private fb: FormBuilder, private authService: AuthService) {
        this.title.setTitle('Sign In | Restaurant Reservation System');
    }

    ngOnInit(): void {
    }

    login() {
        this.authService.login(this.loginForm.value);
    }

    loginWithSocialMedia(socialMedia: string) {
        this.authService.loginWithSocialMedia(socialMedia);
    }
}
