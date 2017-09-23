import { TravalerStore } from './component.store/traveler.store';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel/hotel';
import { AirplaneComponent } from './airplane/airplane';
import { TrainComponent } from './train/train';
import { InterairComponent } from './interair/interair';
import { CitySelectorComponent } from './city-selector/city-selector';
import { TravelerListComponent } from './traveler-list/traveler-list';
import { TravelerAddComponent } from './traveler-add/traveler-add';
import { TravelerDetailComponent } from './traveler-detail/traveler-detail';
import { TravelerEditComponent } from './traveler-edit/traveler-edit';
@NgModule({
    declarations: [
        HotelComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent,
        CitySelectorComponent,
        TravelerListComponent,
        TravelerAddComponent,
        TravelerDetailComponent,
        TravelerEditComponent,
    ],
    imports: [
        IonicModule
    ],
    exports: [
        HotelComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent,
        CitySelectorComponent,
        TravelerListComponent,
        TravelerAddComponent,
        TravelerDetailComponent,
        TravelerEditComponent,
    ],
    entryComponents: [
        HotelComponent,
        AirplaneComponent,
        TrainComponent,
        InterairComponent,
        CitySelectorComponent,
        TravelerListComponent,
        TravelerAddComponent,
        TravelerDetailComponent,
        TravelerEditComponent,
    ],
    providers: [TravalerStore]
})
export class ComponentsModule { }
