import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel/hotel';
import { TravelerComponent } from './traveler/traveler';
import { AirplaneComponent } from './airplane/airplane';
import { TrainComponent } from './train/train';
import { InterairComponent } from './interair/interair';
import { CitySelectorComponent } from './city-selector/city-selector';
@NgModule({
    declarations: [
        HotelComponent,
        TravelerComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent,
        CitySelectorComponent,
    ],
    imports: [],
    exports: [
        HotelComponent,
        TravelerComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent,
        CitySelectorComponent,
    ],
    entryComponents: [
        HotelComponent,
        AirplaneComponent,
        TravelerComponent,
        TrainComponent,
        InterairComponent,
        CitySelectorComponent,
    ]
})
export class ComponentsModule { }
