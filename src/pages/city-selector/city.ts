import { CityData } from './city_list';
import { ViewController ,NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
    providers:[CityData],
    templateUrl:"./city.html",
    selector:'city-selector'
})
export class CitySelector{
    public hotelList;
    constructor(public viewCtrl:ViewController,public navParams:NavParams,public CityData:CityData){
        console.log('asdddd');
        // console.log(this.CityData.getHOTELCITYLIST());
        this.hotelList = this.CityData.getHOTELCITYLIST();
    }
    close(){
        this.viewCtrl.dismiss();
    }
    onInput(e){
        console.log(e);
    }
    ionCancel(e){
        console.log(e);
    }
}