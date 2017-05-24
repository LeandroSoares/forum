import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value, filterQuery: string, prop:any=null): any {
    if(value.length===0||filterQuery===''){
      return value;
    }
    const resultArray=[];

    for(const item of value){
      if(prop!=null){
        if(this.hasQuery(item[prop], filterQuery)){
          resultArray.push(item);
        }
      }else{
        for(let p in item){
           if(this.hasQuery(String(item[p]), filterQuery)){
            resultArray.push(item);
            break;
          }
        }
      }
    }
    return resultArray;
  }
  hasQuery(s1:string,s2:string):boolean{
    return s1.toLowerCase().includes(s2.toLowerCase());
  }
}
