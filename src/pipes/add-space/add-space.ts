import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpace',
})
export class AddSpacePipe implements PipeTransform {
  /**
   * Adds a space between the word week and the number telling you which week you are on
   */
  transform(value: string){
    if (!value) {
      return 'no val?'
    } else {
      let end = value[4]
      return "Week " + end;
    }
    
  }
}
