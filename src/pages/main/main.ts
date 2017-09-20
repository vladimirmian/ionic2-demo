import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name:'main',
    segment:'main'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  homeRoot = 'HomePage'
  inquireRoot = 'InquirePage'
  orderRoot = 'OrderPage'
  personRoot = 'PersonPage'


  constructor(public navCtrl: NavController) {}

}
