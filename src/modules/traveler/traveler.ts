import { CustantService } from './../../service/custant.service';
import { TipService } from './../../service/tips';
import { CommonStore } from './../../store/common.store';
import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ViewController, App } from 'ionic-angular';
@IonicPage({
	name: "travler-page",
	segment: "traveler"
})
@Component({
	providers: [CommonStore, TipService, CustantService],
	selector: 'page-traveler',
	templateUrl: './traveler.html'
})
export class TravelerPage implements OnInit {
	// location.reload();
	constructor(public navCtrl: NavController, private CommonStore: CommonStore, private tips: TipService, private custant: CustantService, public viewCtrl: ViewController, public appCtrl: App) {

	}
	ngOnInit() {
	}
}
