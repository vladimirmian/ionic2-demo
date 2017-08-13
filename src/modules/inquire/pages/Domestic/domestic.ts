import { CitySelector } from './../../../../pages/city-selector/city';
import { NavController, ModalController } from 'ionic-angular';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CalendarController } from "ion2-calendar/dist";
import { inlandParams } from './domestic.interface';
@Component({
    selector: "inquire-domestic",
    templateUrl: "./domestic.html"
})
export class DomesticPage implements OnInit, AfterViewInit {
    public tabTitle = "国内机票22";
    private isOneWay: boolean;
    private inlandParams;
    private departCity;
    private arriveCity;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public calendarCtrl: CalendarController) {

    }
    ngAfterViewInit() {

    }
    ngOnInit() {
        this.isOneWay = true;
        this.inlandParams = inlandParams;
        console.log(this.inlandParams.tripType)
    }
    selectCity(type: String) {
        let cityModal = this.modalCtrl.create(CitySelector, { type: 'hotel' });
        cityModal.onDidDismiss(data => {
            if (!data) return;
            if (type == 'go') {
                this.inlandParams.departCity = data.cityCode;
                this.departCity = data.cityNameCn;
            } else {
                this.inlandParams.arriveCity = data.cityCode;
                this.arriveCity = data.cityNameCn;
            }
        });
        cityModal.present();
    }
    openCalendar(type: String) {
        this.calendarCtrl.openCalendar({
            closeLabel: "取消",
            title: '选择日期',
            canBackwardsSelected: false,
            monthTitle: "yyyy年M月",
            weekdaysTitle: ['日', '一', '二', '三', '四', '五', '六']
        }).then((res: any) => {
            console.log(res)
            if (type == 'go') {
                this.inlandParams.departDate = res.date.time;
            } else {
                this.inlandParams.arriveDate = res.date.time;
            }
        }).catch(() => { })
    }
    
    selectTraveler() {
        this.navCtrl.push('travler-page');
    }
}