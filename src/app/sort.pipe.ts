import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortProp: string): any {
    if (value.length === 0) {
      return value;
    }
    return value.sort((a, b) => {
      return a[sortProp].localeCompare(b[sortProp]);
    });
  }
}
