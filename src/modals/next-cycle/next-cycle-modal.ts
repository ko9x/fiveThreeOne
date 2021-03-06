import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'next-cycle-modal',
    templateUrl: 'next-cycle-modal.html'
})
export class NextCycleModal {

    public currentCycle: string;
    
    constructor(
        public storage: Storage, 
        public alertCtrl: AlertController,
        public viewCtrl: ViewController
    ) {
        
        this.storage.get('currentCycle').then((data) => {
            this.currentCycle = data || 'Cycle 1';
        });
    }

    cancel() {
        this.viewCtrl.dismiss();
    }
}
