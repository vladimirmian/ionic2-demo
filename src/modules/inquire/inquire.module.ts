import { HotelPage } from '../../pages/hotel/hotel';
import { DomesticPage } from './pages/Domestic/domestic';

import { IonicPageModule, IonicModule } from 'ionic-angular';
import { InquirePage } from './inquire';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [
        InquirePage,
        DomesticPage
    ],
    imports: [
        IonicModule.forRoot(InquirePage),
        IonicPageModule.forChild(InquirePage)
    ],
    entryComponents: [
        InquirePage,
        DomesticPage
    ]
})
export class InquireModule { 
    constructor(){
        console.log('asdasda')
    }
}