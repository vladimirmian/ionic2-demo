import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	rootPage: any = HomePage;
		// location.reload();
	constructor(public navCtrl: NavController) {
	}
}
