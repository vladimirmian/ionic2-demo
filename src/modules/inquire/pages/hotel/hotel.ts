import { RestangularModule } from 'ngx-restangular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
	selector: 'page-hotel',
	templateUrl: 'hotel.html'
})
export class HotelPage {
	private loginParams: object = {
		companyNum: "001175",//企业编号
		userName: "",//用户名,
		passWord: ""//密码
	}
	private userInfo: object;
	private token = localStorage.getItem('token');
	
	constructor(public navCtrl: NavController,) {
		// RestangularModule.forRoot
	}
}
