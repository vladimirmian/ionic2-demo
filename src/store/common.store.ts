import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
@Injectable()
export class CommonStore {
    constructor(private restangular: Restangular) { }
    /**
     * 登录接口
     */
    login(params: object) {
        let login = this.restangular.all('index/login').customPOST(params);
        return login;
    }
    /**
     * 登出
     */
    logout() {
        return this.restangular.all('index/logout').customPOST();
    }
    /**
     * 找回密码
     */
    findPassword(params: object) {
        return this.restangular.all('index/findPassword').customPOST(params);
    }
    /**
     * 更新密码
     */
    updatePassword(params: object) { 
        return this.restangular.all('index/updatePassword').customPOST(params);
    }
    /**
     * 获取当前用户信息
     */
    currentInfo(){
        return this.restangular.all('userInfo/current').customGET('');
    }
    /**
     * 获取出行人信息
     */
    getTripPerson(params){
        return this.restangular.all('userInfo/tripPerson').customGET('',params);
    }
}