import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reqlineSearch'
})
export class ReqlineSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
