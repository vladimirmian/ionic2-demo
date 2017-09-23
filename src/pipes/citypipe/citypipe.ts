import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CitypipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'citypipe',
})
export class CitypipePipe implements PipeTransform {
    transform(value: Array<any>, filter: any) {
        let cb = [];
        if (filter) {
            const pattern1 = new RegExp('^' + filter + '\S*', 'i');
            const pattern2 = new RegExp('^' + filter.split('').join('\\S*') + '\\S*', 'i');
            const pattern3 = new RegExp('\\S*' + filter + '\\S*', 'i');
            value.forEach(element => {
                if(pattern3.test(element.name)){
                    cb.push(element)
                }
            });
        } else {
            cb = value;
        }
        return cb;
    }
}
