import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	private token = localStorage.getItem('token');
	rootPage: any =this.token?HomePage:LoginPage;
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		console.log(this.token)
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
}
