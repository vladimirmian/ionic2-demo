import { TipService } from './../../service/tips';
import { HomePage } from './../home/home';
import { CommonStore } from './../../store/common.store';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

@Component({
	providers: [CommonStore, TipService],
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	private loginParams: object = {
		companyNum: "",//企业编号
		userName: "",//用户名,
		passWord: ""//密码
	}
	constructor(public navCtrl: NavController, private CommonStore: CommonStore, private tips: TipService) {

	}
	login(loginForm: NgForm) {
		console.log(loginForm.invalid)
		if (loginForm.invalid) {
			this.tips.presentAlert();
		} else {
			this.CommonStore.login(this.loginParams).subscribe((res) => {
				if (res.status == 200) {
					console.log('login success')
					localStorage.setItem('token', res.data.token);
					this.navCtrl.push(HomePage)
				} else {
					console.log('login fail')
				}
			});
		}
	}
}
