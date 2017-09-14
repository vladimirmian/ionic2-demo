import { GlobalModule } from './../global/global.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RestangularModule } from 'ngx-restangular';
import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        GlobalModule,
        IonicPageModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios-transition'
        }),
        RestangularModule.forRoot((RestangularProvider) => {
            RestangularProvider.setBaseUrl('api');
            // RestangularProvider.setDefaultHeaders({'AuthoriAuzation': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
