import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorttext',
  standalone:true,
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }
}
