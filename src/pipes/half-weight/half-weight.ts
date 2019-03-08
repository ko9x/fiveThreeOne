import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'halfWeight',
})
export class HalfWeightPipe implements PipeTransform {
  /**
   * Divides the weight by 2 so you know how much to put on each side
   */
  transform(value: string){
    if (!value) {
      return 'calculating...'
    } else {
      let result = Number(value)/2
      return result;
    }
    
  }
}
