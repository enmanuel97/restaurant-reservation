import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public userData = {
        uid: '',
        displayName: '',
        email: '',
        is_logged_in: 0
    }

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        const lsData = localStorage.getItem('userData');

        if(lsData != null) {
            this.userData = JSON.parse(lsData);
        }
    }

    createUser(registerForm) {
        const {email, password} = registerForm;
        this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
            this.router.navigateByUrl('/reservations');
        }).catch(error => {
            console.log(error);
        });
    }

    login(loginForm) {
        const {email, password} = loginForm;
        this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
            this.setSessionData();
            this.router.navigateByUrl('/reservations');
        }).catch(error => {
            console.log(error);
        });
    }

    loginWithSocialMedia(socialMedia: string) {
        this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
            this.setSessionData();
            this.router.navigateByUrl('/reservations');
        }).catch(error => {
            console.log(error);
        });
    }

    logout() {
        this.afAuth.signOut().then(result => {
            localStorage.clear();
            this.userData.is_logged_in = 0;
            this.router.navigate(['/']);
        }).catch(error => {
            console.log(error);
        });
    }

    private setSessionData() {
        this.afAuth.authState.subscribe(user => {

            if(!user){
                localStorage.clear();
                this.router.navigate(['/']);
            }

            const {uid, displayName, email} = user;

            const userData = {
                uid,
                displayName,
                email,
                is_logged_in: 1
            };
            this.userData = userData;
            localStorage.setItem('userData', JSON.stringify(userData));
        });
    }
}
