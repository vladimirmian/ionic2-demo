import { RestangularModule } from 'ngx-restangular';
import { TipService } from './../../service/tips';
import { CommonStore } from './../../store/common.store';
import { CustantService } from './../../service/custant.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
@Component({
	providers: [CommonStore, TipService, CustantService],
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage implements OnInit{
	private loginParams: object = {
		companyNum: "001175",//企业编号
		userName: "",//用户名,
		passWord: ""//密码
	}
	private userInfo: object;
	private token = localStorage.getItem('token');
	
	constructor(public navCtrl: NavController, private CommonStore: CommonStore, private tips: TipService, public custant: CustantService) {
		// RestangularModule.forRoot
	}
	ngOnInit() {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
	}
	login(loginForm: NgForm) {
		console.log(loginForm.invalid)
		if (loginForm.invalid) {
			this.tips.presentAlert();
		} else {
			this.CommonStore.login(this.loginParams).subscribe((res) => {
				if (res.status == 200) {
					RestangularModule.forRoot((RestangularProvider) => {
						RestangularProvider.setDefaultHeaders({ 'AuthToken': res.data.token });
					});
					localStorage.setItem('token', res.data.token);
					this.navCtrl.setRoot('home');
				} else {
					this.tips.presentAlert('', res.msg);
				}
			});
		}
	}
	getUserInfo() {
	}
}
