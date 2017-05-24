import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, chars:number): any {
    if(value.length<=chars)return value;
    let result = value.substr(0,chars-3);
    result+="...";
    return result;
  }

}
