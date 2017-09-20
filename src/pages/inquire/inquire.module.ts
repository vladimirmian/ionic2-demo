import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InquirePage } from './inquire';

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(InquirePage),
    ],
    declarations: [
        InquirePage,
    ],
})
export class InquirePageModule { }
