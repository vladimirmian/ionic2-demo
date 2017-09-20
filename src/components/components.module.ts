import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel/hotel';
import { TravelerComponent } from './traveler/traveler';
import { AirplaneComponent } from './airplane/airplane';
import { TrainComponent } from './train/train';
import { InterairComponent } from './interair/interair';
@NgModule({
    declarations: [
        HotelComponent,
        TravelerComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent
    ],
    imports: [],
    exports: [
        HotelComponent,
        TravelerComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent
    ],
    entryComponents: [
        HotelComponent,
        AirplaneComponent,
        TravelerComponent,
        TrainComponent,
        InterairComponent
    ]
})
export class ComponentsModule { }
