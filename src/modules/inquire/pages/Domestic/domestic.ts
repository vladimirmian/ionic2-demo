import { CitySelector } from './../../../../pages/city-selector/city';
import { NavController, ModalController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: "inquire-domestic",
    templateUrl: "./domestic.html"
})
export class DomesticPage implements OnInit {
    private isOneWay: boolean;
    chats: any[];
    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.isOneWay = true;
        this.modalCtrl.create(CitySelector, { type: 123 }).present();
    }
    selectCity() {
        this.modalCtrl.create(CitySelector, { type: 123 }).present();
    }
}