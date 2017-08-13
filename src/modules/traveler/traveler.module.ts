import { TravelerPage } from './traveler';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[TravelerPage],
    imports:[
        IonicPageModule.forChild(TravelerPage)
    ],
    entryComponents:[TravelerPage],
    exports:[IonicPageModule]
})
export class TravelerModule{}