import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'CustumUpperCase',
  standalone:true,
})

export class CustumUpperCasePipe implements PipeTransform{
  transform(text: string): string {
    return text.toUpperCase();
  }
}