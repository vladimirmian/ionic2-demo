import { TipService } from './service/tip.service';
import { CommonService } from './service/common.service';
import { NgModule } from '@angular/core';
@NgModule({
    providers: [CommonService,TipService]
})
export class GlobalModule { }