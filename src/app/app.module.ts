import { TestPageModule } from './../pages/test/test.module';
import { ComponentsModule } from './../components/components.module';
import { GlobalModule } from './../global/global.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RestangularModule } from 'ngx-restangular';
import { MyApp } from './app.component';
import { CalendarModule } from "ion2-calendar";
import { 
    CityListPageModule,
    HomePageModule,
    InquirePageModule,
    MainPageModule,
    OrderPageModule,
    PersonPageModule
} from './../pages/pages.index';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';
@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        GlobalModule,
        TestPageModule,
        CalendarModule,
        IonicPageModule,
        ComponentsModule,
        CityListPageModule,
        HomePageModule,
        InquirePageModule,
        MainPageModule,
        OrderPageModule,
        PersonPageModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '',
            iconMode: 'ios',
            modalEnter: 'modal-slide-in',
            modalLeave: 'modal-slide-out',
            tabsPlacement: 'bottom',
            pageTransition: 'ios-transition'
        }),
        // InquirePageModule.forRoot(),
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
