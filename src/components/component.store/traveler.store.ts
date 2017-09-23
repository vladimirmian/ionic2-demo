import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
@Injectable()
export class TravalerStore {
    constructor(
        private resrangular: Restangular
    ) { }
    /**
     * 获取系统内部出行人列表
     * 
     * @returns 
     * @memberof TravalerStore
     */
    getSysList(params) {
        return this.resrangular.all('/traveler/list').get('', params);
    }
    /**
     * 获取临时出行人列表
     * 
     * @returns 
     * @memberof TravalerStore
     */
    getTempList(params) {
        return this.resrangular.all('/traveler/list').get('', params);
    }
}