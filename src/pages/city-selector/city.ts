import { CityData } from './city_list';
import { ViewController, NavParams, Content } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
@Component({
    providers: [CityData],
    templateUrl: "./city.html",
    selector: 'city-selector'
})
export class CitySelector {
    @ViewChild(CitySelector) CitySelector: Content;
    private citylist;
    private hotCityList;
    private letterIndex;
    private letterInfo;
    private cityAllList;
    constructor(public viewCtrl: ViewController, public navParams: NavParams, public CityData: CityData) {
        this.citylist = this.CityData.getHOTELCITYLIST();
        this.hotCityList = this.citylist.hot.cityList;
        this.letterIndex = this.citylist.keys;
        this.cityAllList = this.citylist.domestic;
    }
    close() {
        this.viewCtrl.dismiss();
    }
    onInput(e) {
        console.log(e);
    }
    ionCancel(e) {
        console.log(e);
    }
}