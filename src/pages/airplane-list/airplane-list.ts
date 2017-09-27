import { TipService } from './../../global/service/tip.service';
import { AirplaneStore } from './airplane.list.store';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RESTSTATUS } from './../../global/constant';
/**
 * Generated class for the AirplaneListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'airplanelist'
})
@Component({
    selector: 'page-airplane-list',
    templateUrl: 'airplane-list.html',
})
export class AirplaneListPage {
    public orderTye = 'default';
    public title;
    public airplaneList: Array<any> = [];
    constructor(
        private airStore: AirplaneStore,
        public navCtrl: NavController,
        public navParams: NavParams,
        private tipCtrl: TipService,
    ) {
        console.log(this.navParams);
        this.title = "深圳-北京";
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AirplaneListPage');
        this.getList();
    }
    back(){
        this.navCtrl.pop();
    }

    getList() {
        this.tipCtrl.showLoading();
        this.airStore.getList({}).subscribe(res => {
            this.tipCtrl.closeLoading();
            if (res.status === RESTSTATUS.success) {
                this.airplaneList = res.data.inlandAirTicket;
            }
        }, err => {
            this.tipCtrl.closeLoading();
        });
    }

    _orderType(){
        console.log(this.orderTye);
    }
}
