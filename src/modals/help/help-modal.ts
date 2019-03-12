import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'help-modal',
    templateUrl: 'help-modal.html'
})
export class HelpModal {

    public currentCycle: string;
    
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
