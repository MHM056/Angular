import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTime'
})
export class SliceTimePipe implements PipeTransform {

  transform(date: string): string {
    return date.substring(0, date.length - 5).replace('T', ' ');
  }

}
