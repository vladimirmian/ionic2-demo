import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
@Injectable()
export class InquireStore {
    constructor(private restangular: Restangular) { }
    searchInlandTicket(params){
        return this.restangular.all('airTicket/inland').customPOST(params);
    }
}