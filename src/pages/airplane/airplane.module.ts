import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirplanePage } from './airplane';

@NgModule({
  declarations: [
    AirplanePage,
  ],
  imports: [
    IonicPageModule.forChild(AirplanePage),
  ],
})
export class AirplanePageModule {}
