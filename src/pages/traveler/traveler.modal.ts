import { TipService } from './../../service/tips';
import { ViewController } from 'ionic-angular';
import { CommonStore } from './../../store/common.store';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {constant} from './../../app/constant';
@Component({
    providers:[CommonStore,TipService],
    selector: 'traveler-modal',
    templateUrl: './traveler.modal.html'
})

export class TravelerModal implements OnInit,AfterViewInit {
    private status = "1";
    private tripParams = {
        keyWord:"",//关键字,姓名、邮箱、手机号
        pageIndex:1,//当前页数
        pageSize:10//每页显示条数
    }
    private tempTripParams = {
        keyWord:"",//关键字,姓名、邮箱、手机号
        pageIndex:1,//当前页数
        pageSize:10//每页显示条数
    }
    constructor(private CommonStore:CommonStore,private ViewController:ViewController,private TipService:TipService) {
    }

    ngOnInit() { }
    ngAfterViewInit(){
        this.CommonStore.getTripPerson(this.tripParams).subscribe(res =>{
            if(res.status == constant.success){

            }else{
                this.TipService.presentAlert(res.msg,"");
            }
        });
    }
    close(){
        this.ViewController.dismiss();
    }
}