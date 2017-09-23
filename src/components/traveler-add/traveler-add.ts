import { TravelerListComponent } from './../traveler-list/traveler-list';
import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the TravelerAddComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'traveler-add',
    templateUrl: 'traveler-add.html'
})
export class TravelerAddComponent {
    private listModal;
    constructor(
        private modalCtrl: ModalController
    ) {
        console.log('Hello TravelerAddComponent Component');
    }
    // 显示列表
    showTravelerList() {
        const params = {
            travelerList: []
        }
        this.listModal = this.modalCtrl.create(TravelerListComponent, params);
        this.listModal.present();
        this.listModal.onDidDismiss(data => {
            console.log(data);
        });
    }
}
