import { HomePageComponent } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
    declarations: [HomePageComponent],
    imports: [
        IonicPageModule.forChild(HomePageComponent)
    ],
    entryComponents: [
        HomePageComponent
    ]
})
export class HomePageModule { }