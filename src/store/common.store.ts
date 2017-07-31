import { Restangular } from 'ngx-restangular';
import { Injectable } from '@angular/core';
@Injectable()
export class CommonStore {
    constructor(private restangular: Restangular) { }
    login(params: object) {
        let login = this.restangular.all('index/login').customPOST(params);
        return login;
    }
    logout() {
        return this.restangular.all('index/logout').customPOST();
    }
    findPassword(params: object) {
        return this.restangular.all('index/findPassword').customPOST(params);
    }
    updatePassword(params: object) { 
        return this.restangular.all('index/updatePassword').customPOST(params);
    }
    currentInfo(){
        return this.restangular.all('userInfo/current').customGET('');
    }
}