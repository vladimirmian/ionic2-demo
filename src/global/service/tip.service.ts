import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
@Injectable()
export class TipService {
    private load;
    private toast;
    constructor(
        private toastCtrl: ToastController,
        private loadingCtrl: LoadingController
    ) {
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
    /**
     * 隐藏loading
     * 
     * @memberof TipService
     */
    closeLoading() {
        this.load.dismiss();
    }
    /**
     * 显示提示信息
     * 
     * @memberof TipService
     */
    showToast(message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top',
            dismissOnPageChange:true
        }).present();
    }

}