import { CityListPage } from './../../pages/city-list/city-list';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
/**
 * Generated class for the CitySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'city-selector',
    templateUrl: 'city-selector.html'
})
export class CitySelectorComponent implements OnInit {
    @Input() selectType: string; // 选择模式，double-双选，simgle-单选
    @Output() Selection: EventEmitter<any> = new EventEmitter<any>();
    private cityModal;
    public city = '请选择城市';
    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController
    ) {
        console.log(this.selectType);
    }
    ngOnInit() {
        console.log(this.selectType);
    }
    showCityList() {
        this.cityModal = this.modalCtrl.create(CityListPage);
        this.cityModal.present();
        this.cityModal.onDidDismiss(data => {
            this.city = data.name;
            this.Selection.emit(data);
        });
    }
}
