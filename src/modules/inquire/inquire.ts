import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
@IonicPage({
  name: 'inquire-page',
  segment: 'inquire'
})
@Component({
    selector:'page-inquire',
    templateUrl:'./inquire.html'
})
export class InquirePage{
    constructor(public navCtrl:NavController){}
}