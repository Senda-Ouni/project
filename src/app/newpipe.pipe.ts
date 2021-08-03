import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newpipe'
})
export class NewpipePipe implements PipeTransform {

  transform(value: any, args?: any, filtertext?:any): any {
    if (!args){
      return value;
    }else{
      args=args.toUpperCase();
    }
  return  value.filter(items=>
      items.governorateDesignation.toLowerCase().indexOf(args.toLowerCase()) !=-1);
  }

}
