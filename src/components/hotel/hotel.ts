import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { CalendarController } from "ion2-calendar/dist";

/**
 * Generated class for the HotelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'hotel',
    templateUrl: 'hotel.html'
})
export class HotelComponent {
    public timeStemp = {
        from: '', to: ''
    };
    constructor(
        private calendarCtrl: CalendarController,
        private navCtrl: NavController
    ) {
        console.log('Hello HotelComponent Component');
    }
    changeCity(e) {
        console.log(e)
    }
    openCalendar() {
        this.calendarCtrl.openCalendar({
            cssClass: 'my-class',
            pickMode: 'range',
        }).then(_ => {
            console.log(_);
            this.timeStemp.from = _.from.time;
            this.timeStemp.to = _.to.time;
        });
    }
    search() {
        this.navCtrl.push('hotellist');
    }
}
