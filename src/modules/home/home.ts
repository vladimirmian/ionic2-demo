import { MyApp } from './../../app/app.component';
import { CustantService } from './../../service/custant.service';
import { TipService } from './../../service/tips';
import { CommonStore } from './../../store/common.store';
import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ViewController, App } from 'ionic-angular';
import { userinfo } from './../../interface/userInfo.interface';
@IonicPage({
	name: "home",
	segment: ""
})
@Component({
	providers: [CommonStore, TipService, CustantService],
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	rootPage: any = HomePage;
	private token = localStorage.getItem('token');
	private showUserInfo: boolean = false;
	private userInfo: object = userinfo;
	// location.reload();
	constructor(public navCtrl: NavController, private CommonStore: CommonStore, private tips: TipService, private custant: CustantService, public viewCtrl: ViewController, public appCtrl: App) {

	}
	ngOnInit() {
		this.CommonStore.currentInfo().subscribe(res => {
			if (res.status == this.custant.success) {
				this.userInfo = res.data.userInfo;
				localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
			} else {
				this.tips.presentAlert('', res.msg);
			}
		});
	}
	gotoabout() {
		console.log('sss2222')
		this.navCtrl.push('inquire-page');
	}
}
