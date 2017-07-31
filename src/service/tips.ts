import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Injectable()
export class TipService {
    constructor(private alertCtrl: AlertController) {
    }
    presentAlert(title: string = "参数错误", subtitle: string = "请检查参数后重新提交") {
        return this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            enableBackdropDismiss: false,
            buttons: ['确认']
        }).present();
    }
    presentConfirm(title: string = "参数错误", subtitle: string = "请检查参数后重新提交") {
        return this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    role: 'cancel',
                    handler: () => {
                        console.log('Buy clicked');
                    }
                }
            ]
        }).present();
    }
}