import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AddSpacePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'addSpace',
})
export class AddSpacePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
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
