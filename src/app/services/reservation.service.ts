import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {

    // public uid = JSON.parse(localStorage.getItem('userData')).uid;
    public uid = 0;
    constructor(private firestore: AngularFirestore) { }

    getReservations() {
        return this.firestore.collection('reservations', ref => ref.where('hidden', '==', 0)
            .where('uid', '==', this.uid).orderBy('creation_date', 'desc')).valueChanges();
    }

    async getReservation(id: string) {
        return await this.firestore.collection('reservations').ref.where('id', '==', id).get();
    }

    newReservation(formData) {
        return new Promise<any>((resolve, reject) => {
            formData.date           = this.getCurrentDate();
            formData.creation_date  = new Date();
            formData.hidden         = 1;
            this.firestore.collection('reservations').add(formData)
                .then(res => {return true}, err => reject(err));
        });
    }

    private getCurrentDate(): string{
        let currentDate = new Date();
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
