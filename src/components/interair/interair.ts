import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { CalendarController } from "ion2-calendar/dist";
/**
 * Generated class for the InterairComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'interair',
    templateUrl: 'interair.html'
})
export class InterairComponent {
    public isRound: Boolean = false;
    public tripData = {
        go: '请选择出发时间',
        back: '请选择到达时间'
    }
    text: string;

    constructor(
        private calendarCtrl: CalendarController,
        private navCtrl: NavController
    ) {
        console.log('Hello AirplaneComponent Component');
        this.text = 'Hello World';
    }
    changeCity(e) {
        console.log(e)
    }
    openCalendar(type) {
        this.calendarCtrl.openCalendar({ from: new Date() }).then(_ => {
            console.log(_);
            this.tripData[type] = _.string;
        });
    }
    search() {
        this.navCtrl.push('airplanelist');
    }

}
