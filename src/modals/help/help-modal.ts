import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'help-modal',
    templateUrl: 'help-modal.html'
})
export class HelpModal {

    public currentCycle: string;
    public exampleSets = [
        {name: 'set 1', weight: "70%", reps: "1x5"},
        {name: 'set 2', weight: "80%", reps: "1x5"},
        {name: 'set 3', weight: "90%", reps: "1x5"},
        {name: 'set 4', weight: "100%", reps: "1x3-5"}
      ]
    
    constructor(
        public storage: Storage,
        public alertCtrl: AlertController,
        public viewCtrl: ViewController
    ) {
        
        
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

}
