import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { CalendarController } from "ion2-calendar/dist";
import {WEEKSCN} from './../../global/constant';
/**
 * Generated class for the TrainComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'train',
  templateUrl: 'train.html'
})
export class TrainComponent {
    public timeStemp;
    public weeksCn = WEEKSCN;
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
        }).then(_ => {
            console.log(_);
            this.timeStemp = _.time;
        });
    }
    search() {
        this.navCtrl.push('hotellist');
    }

}
