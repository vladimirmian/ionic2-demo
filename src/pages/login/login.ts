import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	private loginParams: object = {
		companyNum: "",//企业编号
		userName: "",//用户名,
		passWord: ""//密码
	}
	constructor(public navCtrl: NavController) {

	}
	login(){
		console.log(this.loginParams)
	}
}
