import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'select-day-modal',
    templateUrl: 'select-day-modal.html'
})
export class SelectDayModal {

    public days = ["Monday", "Wednesday", "Friday"];
    public weeks = ["Week 1", "Week 2", "Week 3"];
    public tmt: string
    
    constructor(
        public viewCtrl: ViewController, 
        public navParams: NavParams
        ) {
            this.tmt = this.navParams.get('tmt')
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
        
      
}
