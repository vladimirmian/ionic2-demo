import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SearchPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'search'
})
@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    hotelRoot = 'HotelPage'
    airplaneRoot = 'AirplanePage'


    constructor(public navCtrl: NavController) { }
    gotoInquire() {
        this.navCtrl.setRoot('inquire');
    }
}
