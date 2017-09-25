import { AirplaneStore } from './airplane.list.store';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirplaneListPage } from './airplane-list';

@NgModule({
    declarations: [
        AirplaneListPage,
    ],
    imports: [
        IonicPageModule.forChild(AirplaneListPage),
    ],
    providers: [AirplaneStore]
})
export class AirplaneListPageModule { }
