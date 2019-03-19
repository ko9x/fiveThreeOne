import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { CurrentDayService } from '../../providers/current-day-service/current-day-service';

@Component({
    selector: 'select-day-modal',
    templateUrl: 'select-day-modal.html'
})
export class SelectDayModal {

    public days = ["Monday", "Wednesday", "Friday"];
    public weeks = ["Week 1", "Week 2", "Week 3"];
    public tmt: string;
    public day: string;
    
    constructor(
        public viewCtrl: ViewController, 
        public navParams: NavParams,
        public currentDayService: CurrentDayService
        ) {
            this.tmt = this.navParams.get('tmt')
            this.getCurrentDay();
        }
        
        cancel() {
            this.viewCtrl.dismiss();
        }
        
        daySelected(day,week) {
            this.viewCtrl.dismiss({
                day: day,
                week: week
            });
        }
        
        getCurrentDay() {
            this.currentDayService.getCurrentDay().then((currentDay) => {
              if(currentDay) {
                this.day = currentDay;
              }
              console.log('from select day modal', this.day); //@DEBUG
            });
          }
      
}
