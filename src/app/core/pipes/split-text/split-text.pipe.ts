import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitText'
})
export class SplitTextPipe implements PipeTransform {

  transform(value: string, numberOfChar: number): unknown {
    return //value.split(0,numberOfChar) + '...';
  }

}
