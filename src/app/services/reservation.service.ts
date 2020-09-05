import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    constructor(private firestore: AngularFirestore, private router: Router) { }

    getReservations() {
        const uid = JSON.parse(localStorage.getItem('userData')).uid;
        return this.firestore.collection('reservations', ref => ref.where('uid', '==', uid).orderBy('creation_date', 'desc')).valueChanges();
    }

    async getReservation(id: string) {
        return await this.firestore.collection('reservations').ref.where('id', '==', id).get();
    }

    newReservation(restaurantData, reservationData) {
        const uid = JSON.parse(localStorage.getItem('userData')).uid;
        return new Promise<any>((resolve, reject) => {
            const formData = {
                restaurantId        : restaurantData.id,
                userName            : reservationData.name,
                quantity            : reservationData.quantity,
                name                : restaurantData.name,
                price               : restaurantData.price,
                reservation_date    : this.getCurrentDate(restaurantData.reservation_date),
                creation_date       : this.getCurrentDate(),
                hidden              : 0,
                uid
            };
            console.log(formData);
            this.firestore.collection('reservations').add(formData)
                .then(res => {
                    this.router.navigateByUrl('/reservations');
                }, err => reject(err));
        });
    }

    private getCurrentDate(date  = new Date()): string{
        let currentDate = date;
        let day:any = currentDate.getDate();
        let month:any = currentDate.getMonth() + 1;
        let year:any = currentDate.getFullYear();
        let dateInApiFormat: string;

        if(day<10){
            day = '0' + day.toString();
        }
        if(month<10){
            month = '0' + month.toString();
        }
        dateInApiFormat = day + '-' + month + '-' + year.toString();
        return dateInApiFormat;
    }
}
