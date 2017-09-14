import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
@Injectable()
export class CommonService {
    constructor(private restangular: Restangular) { }
    /**
     * 获取当前登录的用户信息
     * @param 
     * @memberof CommonService
     */
    getUserInfo(){
        return this.restangular.all('user/current').get('');
    }
}