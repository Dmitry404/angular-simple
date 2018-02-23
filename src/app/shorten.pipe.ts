import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number, ending: string): any {
    const shortenTo = limit ? limit : 10;
    const postfix = ending ? ending : '...';

    if (value.length > shortenTo) {
      return value.substr(0, shortenTo) + postfix;
    } else {
      return value;
    }
  }
}
