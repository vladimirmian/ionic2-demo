import { MyApp } from './../../app/app.component';
import { IonicPage, NavController, App, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
@IonicPage({
    name: 'inquire-page',
    segment: 'inquire'
})
@Component({
    selector: 'page-inquire',
    templateUrl: './inquire.html'
})
export class InquirePage {
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public appCtrl: App) { }
    gotohome() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(MyApp);
    }
}