import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let year=value.getFullYear();
    let month = value.getMonth()+1;
    let day = value.getDate();
    let day_week=value.getDay();
    return day + "/"+month+"/"+year;
  }

}
