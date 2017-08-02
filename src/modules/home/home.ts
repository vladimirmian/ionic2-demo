import { CustantService } from './../../service/custant.service';
import { TipService } from './../../service/tips';
import { CommonStore } from './../../store/common.store';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {userinfo} from './../../interface/userInfo.interface';
@Component({
	providers: [CommonStore, TipService, CustantService],
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	rootPage: any = HomePage;
	private showUserInfo: boolean = false;
	private userInfo: object = userinfo;
	// location.reload();
	constructor(public navCtrl: NavController, private CommonStore: CommonStore, private tips: TipService, private custant: CustantService) {

	}
	ngOnInit() {
		this.CommonStore.currentInfo().subscribe(res => {
			if (res.status == this.custant.success) {
				this.userInfo = res.data.userInfo;
				console.log(this.userInfo)
				localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
			} else {
				this.tips.presentAlert('', res.msg);
			}
		});
	}
	gotoabout(){
		console.log('sss')
		this.navCtrl.push('about-page')
	}
}
