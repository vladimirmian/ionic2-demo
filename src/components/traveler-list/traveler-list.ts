import { TipService } from './../../global/service/tip.service';
import { TravalerStore } from './../component.store/traveler.store';
import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { RESTSTATUS } from './../../global/constant';
/**
 * Generated class for the TravelerListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'traveler-list',
    templateUrl: 'traveler-list.html'
})
export class TravelerListComponent {
    public keyWord;
    public travalerType = 'system';
    private sysParams = {
        pageIndex: 1,
        pageSize: 10,
        keyWord: ''
    };
    private sysList: Array<any> = [];
    private modal;
    constructor(
        private viewCtrl: ViewController,
        private tipCtrl: TipService,
        private TravalerStore: TravalerStore
    ) {
        console.log('Hello TravelerListComponent Component');
        this.getSysList();
        this.modal = this.viewCtrl;
    }
    getSysList() {
        this.tipCtrl.showLoading();
        this.TravalerStore.getSysList(this.sysParams).subscribe(_ => {
            this.tipCtrl.closeLoading();
            if (_.status === RESTSTATUS.success) {
                this.sysList = _.data.traveler;
            }
        });
    }
    confirm() {
        let data = { 'foo': 'bar' };
        if (this.modal) {
            this.modal.dismiss(data);
            this.modal = null;
        }
    }
}
