import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: "inquire-domestic",
    templateUrl: "./domestic.html"
})
export class DomesticPage implements OnInit {
    private isOneWay: boolean;
    chats: any[];
    constructor(public navCtrl: NavController) {
        this.chats = [
            {
                img: './assets/avatar-cher.png',
                name: 'Cher',
                message: 'Ugh. As if.',
                time: '9:38 pm'
            }, {
                img: './assets/avatar-dionne.png',
                name: 'Dionne',
                message: 'Mr. Hall was way harsh.',
                time: '8:59 pm'
            }, {
                img: './assets/avatar-murray.png',
                name: 'Murray',
                message: 'Excuse me, "Ms. Dione."',
                time: 'Wed'
            }];
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.isOneWay = true;
    }
}