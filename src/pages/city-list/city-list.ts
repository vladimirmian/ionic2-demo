import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'city-list'
})
@Component({
    selector: 'page-city-list',
    templateUrl: 'city-list.html',
})
export class CityListPage {
    public cityType: string;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.cityType = 'inland';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CityListPage');
    }
    selectThisCity(){
        
    }
}
