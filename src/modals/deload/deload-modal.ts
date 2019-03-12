import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'deload-modal',
    templateUrl: 'deload-modal.html'
})
export class DeloadModal {

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
