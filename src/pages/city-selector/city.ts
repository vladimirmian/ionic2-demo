import { ViewController ,NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
    templateUrl:"./city.html",
    selector:'city-selector'
})
export class CitySelector{
    constructor(public viewCtrl:ViewController,public navParams:NavParams){
        console.log('asdddd')
    }
    close(){
        this.viewCtrl.dismiss();
    }
}