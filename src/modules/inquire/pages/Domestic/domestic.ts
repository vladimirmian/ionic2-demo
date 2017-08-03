import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
    selector:"inquire-domestic",
    templateUrl:"./domestic.html"
})
export class DomesticPage implements OnInit{
    private isOneWay:boolean;
    constructor(public navCtrl:NavController){

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.isOneWay = true;
    }
}