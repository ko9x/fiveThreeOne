import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'select-day-modal',
    templateUrl: 'select-day-modal.html'
})
export class SelectDayModal {

    public days = ["Monday", "Wednesday", "Friday"];
    public weeks = ["Week 1", "Week 2", "Week 3"];
    
    constructor(
        public viewCtrl: ViewController, 
        public navParams: NavParams
        ) {
        }
        
        cancel() {
            this.viewCtrl.dismiss();
        }
        
        daySelected(week,day) {
            this.viewCtrl.dismiss({
                week: week,
                day: day
            });
        }
        
      
}
