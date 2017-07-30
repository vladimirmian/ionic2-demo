import { CommonStore } from './../../store/common.store';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	providers:[CommonStore],
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	private loginParams: object = {
		companyNum: "",//企业编号
		userName: "",//用户名,
		passWord: ""//密码
	}
	constructor(public navCtrl: NavController,private CommonStore:CommonStore) {

	}
	login(){
		this.CommonStore.login(this.loginParams).subscribe((res)=>{
			if(res.status == 200){
				console.log('login success')
				localStorage.setItem('token',res.data.token);
			}else{
				console.log('login fail')
			}
		});
	}
}
