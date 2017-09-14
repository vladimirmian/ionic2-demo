import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
@Injectable()
export class TipService {
    private load;
    constructor(private loadingCtrl: LoadingController) {
        this.load = this.loadingCtrl.create({
            content: '请等待'
        });
    }
    /**
     * 显示loading
     * 
     * @memberof TipService
     */
    showLoading() {
        this.load.present();
    }
    closeLoading() {
        this.load.dismiss();
    }
}