import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityListPage } from './city-list';

@NgModule({
    declarations: [
        CityListPage,
    ],
    imports: [
        PipesModule,
        IonicPageModule.forChild(CityListPage),
    ],
    entryComponents: [
        CityListPage
    ]
})
export class CityListPageModule { }
