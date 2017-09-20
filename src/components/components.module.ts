import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel/hotel';
import { TravelerComponent } from './traveler/traveler';
@NgModule({
    declarations: [
        HotelComponent,
        TravelerComponent
    ],
    imports: [],
    exports: [
        HotelComponent,
        TravelerComponent
    ],
    entryComponents: [
        HotelComponent,
        TravelerComponent
    ]
})
export class ComponentsModule { }
