import { CityListPage } from './../../pages/city-list/city-list';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
/**
 * Generated class for the CitySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'city-selector',
    templateUrl: 'city-selector.html'
})
export class CitySelectorComponent implements OnInit {
    @Input() selectType: string; // 选择模式，double-双选，simgle-单选
    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController
    ) {
        console.log(this.selectType);
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(this.selectType);
    }
    showCityList() {
        // this.navCtrl.push('city-list');
        this.modalCtrl.create(CityListPage).present();
    }
}
