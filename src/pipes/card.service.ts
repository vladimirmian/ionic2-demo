/**
 * 这个管道用于过滤出行人的证件类型与证件号码
 * usage：{{object | cardProcess:'cardName'}} or {{object | cardProcess:'cardNumver'}}
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'cardProcess' })
export class cardProcessPipe implements PipeTransform {
    transform() { }
}