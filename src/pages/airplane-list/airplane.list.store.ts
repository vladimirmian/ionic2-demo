import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
@Injectable()
export class AirplaneStore {
    constructor(
        private restangular: Restangular
    ) { }
    /**
     * 获取机票列表
     * 
     * @param {any} params 
     * @returns 
     * @memberof AirplaneStore
     */
    getList(params) {
        return this.restangular.all('airTicket/inland').customPOST(params);
    }
}