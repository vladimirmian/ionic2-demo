import { RestangularModule } from 'ngx-restangular';
import { TipService } from './../../service/tips';
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
		companyNum: "001175",//企业编号
		userName: "",//用户名,
		passWord: ""//密码
	}
	constructor(public navCtrl: NavController, private CommonStore: CommonStore, private tips: TipService) {
		// RestangularModule.forRoot
	}
	login(loginForm: NgForm) {
		console.log(loginForm.invalid)
		if (loginForm.invalid) {
			this.tips.presentAlert();
		} else {
			this.CommonStore.login(this.loginParams).subscribe((res) => {
				if (res.status == 200) {
					RestangularModule.forRoot((RestangularProvider)=>{
						RestangularProvider.setDefaultHeaders({'AuthToken': res.data.token});
					});
					localStorage.setItem('token', res.data.token);
					this.navCtrl.push('home')
				} else {
					this.tips.presentAlert('',res.msg);
				}
			});
		}
	}
}
