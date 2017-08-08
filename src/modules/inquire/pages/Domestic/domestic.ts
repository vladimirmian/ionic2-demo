import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { CalendarController } from "ion2-calendar/dist";
@Component({
    selector: "inquire-domestic",
    templateUrl: "./domestic.html"
})
export class DomesticPage implements OnInit {
    private isOneWay: boolean;
    constructor(public navCtrl: NavController, public calendarCtrl: CalendarController) {
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.isOneWay = true;
    }
    openCalendar() {
        this.calendarCtrl.openCalendar({
            closeLabel:"取消",
            title: '选择日期',
            canBackwardsSelected:false,
            monthTitle:"yyyy年M月",
            weekdaysTitle:['日','一','二','三','四','五','六']
        }).then((res: any) => { console.log(res) }).catch(() => { })
    }
}