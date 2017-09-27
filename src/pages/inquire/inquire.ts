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
    public appType: string = 'inland';
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        console.log(this.navParams);
        this.appType = this.navParams.data.type;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad InquirePage');
    }
}
