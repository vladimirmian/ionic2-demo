import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InquirePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'inquire'
})
@Component({
    selector: 'page-inquire',
    templateUrl: 'inquire.html'
})
export class InquirePage {
    public inquireIndex = 1;
    airplaneRoot = 'AirplanePage';
    hotelRoot = 'HotelPage';
    internationalRoot = 'InternationalPage';
    trainRoot = 'TrainPage';


    constructor(public navCtrl: NavController, private NavParams: NavParams) { }
    

}
