import { Injectable, OnInit } from '@angular/core';
import {hotelCityList} from './city_data';
@Injectable()
export class CityData implements OnInit {
    private HOTELCITYLIST;
    constructor() { }
    ngOnInit() {
    }
    getHOTELCITYLIST(){
        this.HOTELCITYLIST = this.convertDataObject(JSON.parse(hotelCityList));
        return this.HOTELCITYLIST;
    }
    convertDataObject(list) {
        var result = [];
        var letterKeys = [];
        var letterInfo = {};
        for (var keys in list.domestic) {
            for (var key in list.domestic[keys]) {
                result.push({ id: 'Tag', name: key });
                letterKeys.push(key);
                letterInfo[key] = list.domestic[keys][key].length;
                result = result.concat(list.domestic[keys][key]);
            }
        }
        return {
            hot: list.hot,
            domestic: result,
            keys: letterKeys,
            letterInfo: letterInfo
        };
    }
}
