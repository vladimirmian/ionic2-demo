import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-test',
    templateUrl: 'test.html',
})
export class TestPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TestPage');
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}
