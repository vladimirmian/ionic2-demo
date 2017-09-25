import { TipService } from './../../global/service/tip.service';
import { TravalerStore } from './../component.store/traveler.store';
import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { RESTSTATUS } from './../../global/constant';
import * as _ from 'lodash';
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
    private refresher;
    private infinite;
    private selectedTravler = [];
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
        private TravalerStore: TravalerStore,
    ) {
        console.log('Hello TravelerListComponent Component');
        this.getSysList();
        this.modal = this.viewCtrl;
    }
    getSysList() {
        this.tipCtrl.showLoading();
        this.TravalerStore.getSysList(this.sysParams).subscribe(res => {
            this.tipCtrl.closeLoading();
            if (res.status === RESTSTATUS.success) {
                // res.data.traveler.forEach(_ele => {
                //     _ele.isSelect = false;
                // });
                this.sysList = this.sysList.concat(res.data.traveler);
                if (this.refresher) {
                    this.refresher.complete();
                    this.refresher = null;
                }
                if (this.infinite) {
                    this.infinite.complete();
                    this.infinite = null;
                }
            }
        });
    }
    confirm() {
        this.modal.dismiss(this.selectedTravler);
    }
    onInput(onInput) {
        console.log(onInput)
    }
    onCancel(onCancel) {
        console.log(onCancel)
    }
    doRefresh(refresher) {
        this.sysList = [];
        this.sysParams.pageIndex = 1;
        this.refresher = refresher;
        this.getSysList();
    }
    doInfinite(infinite) {
        this.sysParams.pageIndex += 1;
        this.infinite = infinite;
        this.getSysList();
    }
    selectTravaler(traveler) {
        if (traveler.isSelect) {
            if (this.selectedTravler.length < 5) {
                this.selectedTravler.push(traveler);
            } else {
                traveler.isSelect = false;
                this.tipCtrl.showToast('您选择的出行人已经到达上限');
            }
        } else {
            this.selectedTravler = _.without(this.selectedTravler, traveler);
        }
        console.log(this.selectedTravler);
    }
}
