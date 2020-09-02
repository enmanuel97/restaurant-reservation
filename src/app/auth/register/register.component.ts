import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
    selector    : 'app-register',
    templateUrl : './register.component.html',
    styleUrls   : ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public registerForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(private title: Title, private fb: FormBuilder, private authService: AuthService) {
        this.title.setTitle('Sign Up | Restaurant Reservation System');
    }

    ngOnInit(): void {
    }

    register() {
        this.authService.createUser(this.registerForm.value);
    }

    loginWithSocialMedia(socialMedia: string) {
        this.authService.loginWithSocialMedia(socialMedia);
    }
}
