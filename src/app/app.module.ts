import { InquireModule } from './../modules/inquire/inquire.module';
import { HomeModule } from './../modules/home/home.module';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { RestangularModule } from 'ngx-restangular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
let AuthToken = localStorage.getItem('token');
@NgModule({
	declarations: [
		MyApp,
		LoginPage,
	],
	imports: [
		HomeModule,
		InquireModule,
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			backButtonText: '',
			iconMode: 'ios',
			modalEnter: 'modal-slide-in',
			modalLeave: 'modal-slide-out',
			tabsPlacement: 'bottom',
			pageTransition: 'ios-transition'
		}),
		RestangularModule.forRoot((RestangularProvider) => {
			RestangularProvider.setBaseUrl('test/app');
			RestangularProvider.setDefaultHeaders({ 'AuthToken': AuthToken });
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {
	constructor() {
		console.log('i am running');
	}
}
