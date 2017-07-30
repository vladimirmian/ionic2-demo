import { Restangular } from 'ngx-restangular';
import { Injectable} from '@angular/core';
@Injectable()
export class CommonStore{
    constructor(private restangular:Restangular){}
    login(params:object){
        let login = this.restangular.all('index/login').customPOST(params);
        return login;
    }
}