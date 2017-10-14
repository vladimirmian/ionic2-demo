'use strict';
// 后台请求响应码
export enum RESTSTATUS {
    success = 200,
    unauthorized = 99999,
    forbidden = 403,
    unprocessable = 522
}

export enum CERTIFICATE {
    '身份证',
    '护照',
    '港澳通行证',
    '香港身份证',
    '回乡证'
}
export const WEEKSCN = {
    Mon: '周一',
    Tue: '周二',
    Wed: '周三',
    Thu: '周四',
    Fri: '周五',
    Sat: '周六',
    Sun: '周日',
}