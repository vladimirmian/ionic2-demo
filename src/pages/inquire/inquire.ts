import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
@IonicPage({
    name: 'inquire'
})
@Component({
    selector: 'page-inquire',
    templateUrl: 'inquire.html',
})
export class InquirePage {
    public appType: string = 'train';
    public PRODUCTTYPE = {
        'inland': "国内机票",
        'interair': "国际机票",
        'hotel': "酒店预订",
        'train': "火车票预订"
    };
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(this.PRODUCTTYPE[this.appType]);
        // this.appType = this.navParams.data.type;
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad InquirePage');
        // this.appType = this.navParams.data.type;
    }
}
