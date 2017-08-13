import { CityData } from './city_data_manage';
import { ViewController, NavParams, Content } from 'ionic-angular';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
@Component({
    providers: [CityData],
    templateUrl: "./city.html",
    selector: 'city-selector'
})
export class CitySelector implements OnInit ,AfterViewInit{
    @ViewChild(CitySelector) CitySelector: Content;
    private cityType;//接受传过来的type去查找城市类型
    private citylist;
    private hotCityList;//热门城市
    private letterIndex;//字母列表
    private letterInfo;
    private cityAllList;//所有城市列表

    constructor(public viewCtrl: ViewController, public navParams: NavParams, public CityData: CityData) {
        this.cityType = this.navParams.data.type;
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        
        if (this.cityType == 'hotel') {
            this.citylist = this.CityData.getHOTELCITYLIST();
            this.hotCityList = this.citylist.hot.cityList;
            this.letterIndex = this.citylist.keys;
            this.cityAllList = this.citylist.domestic;
        }
    }
    ngOnInit() {
    }
    select(city:any){
        let callback = city;
        if(callback.tag) return;
        this.viewCtrl.dismiss(callback);
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