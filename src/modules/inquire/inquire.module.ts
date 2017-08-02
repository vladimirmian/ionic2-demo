import { IonicPageModule } from 'ionic-angular';
import { InquirePage } from './inquire';
import { NgModule } from '@angular/core';
@NgModule({
    declarations: [InquirePage],
    imports: [
        IonicPageModule.forChild(InquirePage)
    ],
    entryComponents: [
        InquirePage
    ]
})
export class InquireModule { }