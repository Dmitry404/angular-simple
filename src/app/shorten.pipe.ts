import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const shortenTo = args[0] ? args[0] : 10;
    const postfix = value.length > shortenTo ? '...' : '';

    return value.substr(0, shortenTo) + postfix;
  }

}
