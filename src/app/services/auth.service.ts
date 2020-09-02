import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        // this.afAuth.authState.subscribe(user => {
        //     console.log(user);
        //
        //     if(!user){
        //         return;
        //     }
        //     const userData = {
        //         name: user.displayName || user.email,
        //         uid : user.uid
        //     }
        //     this.
        // });
    }

    createUser(registerForm) {
        const {email, password} = registerForm;
        this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
            console.log(result);
            this.router.navigate(['/reservations']);
        }).catch(error => {
            console.log(error);
        });
    }

    login(loginForm) {
        const {email, password} = loginForm;
        this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
            console.log(result);
            this.router.navigate(['/reservations']);
        }).catch(error => {
            console.log(error);
        });
    }

    loginWithSocialMedia(socialMedia: string) {
        this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
            console.log(result);
            this.router.navigate(['/reservations']);
        }).catch(error => {
            console.log(error);
        });
    }

    logout() {
        this.afAuth.signOut().then(result => {
            this.router.navigate(['/']);
        }).catch(error => {
            console.log(error);
        });
    }
}
