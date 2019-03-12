import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'tm-test-modal',
    templateUrl: 'tm-test-modal.html'
})
export class TMTestModal {

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
