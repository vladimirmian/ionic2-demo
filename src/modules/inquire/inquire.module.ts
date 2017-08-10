import { TrainPage } from './pages/Train/train';
import { HotelPage } from './pages/hotel/hotel';
import { InternationalPage } from './pages/International/international';
import { DomesticPage } from './pages/Domestic/domestic';

import { IonicPageModule, IonicModule } from 'ionic-angular';
import { InquirePage } from './inquire';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        InquirePage,
        DomesticPage,
        InternationalPage,
        HotelPage,
        TrainPage
    ],
    imports: [
        IonicPageModule.forChild(InquirePage)
    ],
    entryComponents: [
        InquirePage,
        DomesticPage,
        InternationalPage,
        HotelPage,
        TrainPage
    ],
    exports: [
        IonicPageModule
    ]
})
export class InquireModule {
    constructor() {
    }
}