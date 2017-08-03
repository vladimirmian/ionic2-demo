import { TrainPage } from './pages/Train/train';
import { InternationalPage } from './pages/International/international';
import { DomesticPage } from './pages/Domestic/domestic';
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
    
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public appCtrl: App) {
        // console.log(DomesticPage)
     }
    gotohome() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(MyApp);
    }
    gotoHotel(){
        this.navCtrl.push(DomesticPage)
    }
}