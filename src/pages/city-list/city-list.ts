import { TipService } from './../../global/service/tip.service';
import { CommonService } from './../../global/service/common.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RESTSTATUS } from './../../global/constant';
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
export class CityListPage implements OnInit {
    public cityType: string;
    public cityList: Array<any> = [];
    public cityName;
    constructor(
        private tipCtrl: TipService,
        private commonservice: CommonService,
        private viewCtrl: ViewController,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.cityType = 'inland';
    }
    ngOnInit() {
        this.tipCtrl.showLoading();
        this.commonservice.getCityList().subscribe(res => {
            this.tipCtrl.closeLoading();
            if (res.status == RESTSTATUS.success) {
                this.cityList = res.data.cityList;
            } else {

            }
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CityListPage');
    }
    selectThisCity(city) {
        this.viewCtrl.dismiss(city);
    }
    onInput(e) {
        console.log(e);
        this.cityName = e;
    }
    onCancel(e) {
        console.log(e);
        this.cityName = '';
    }
}
