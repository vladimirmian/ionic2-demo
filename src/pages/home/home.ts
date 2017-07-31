import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	private token = localStorage.getItem('token');
	rootPage: any = HomePage;
	constructor(public navCtrl: NavController) {

	}

}
