import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DeloadModal } from '../../modals/deload/deload-modal';
import { TMTestModal } from '../../modals/tm-test/tm-test-modal';
import { NextCycleModal } from '../../modals/next-cycle/next-cycle-modal';
import { HelpModal } from '../../modals/help/help-modal';


@Component({
    selector: 'cycle-end-modal',
    templateUrl: 'cycle-end-modal.html'
})
export class CycleEndModal {

    public currentCycle: string;
    
    constructor(
        public storage: Storage,
        public alertCtrl: AlertController,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController
    ) {
        
        this.storage.get('currentCycle').then((data) => {
            this.currentCycle = data || 'Cycle 1';
        });
    }

    deloadModal() {
        let dModal = this.modalCtrl.create( DeloadModal );
    
        dModal.onDidDismiss( data => {
          if (data) {
            console.log('the data', data); //@DEBUG
          }
        });
    
        dModal.present();
    
        
      }

    tmTestModal() {
        let tmtModal = this.modalCtrl.create( TMTestModal );
    
        tmtModal.onDidDismiss( data => {
          if (data) {
            console.log('the data', data); //@DEBUG
          }
        });
    
        tmtModal.present();
    
        
      }

    nextCycleModal() {
        let ncModal = this.modalCtrl.create( NextCycleModal );
    
        ncModal.onDidDismiss( data => {
          if (data) {
            console.log('the data', data); //@DEBUG
          }
        });
    
        ncModal.present();
    
        
      }

    helpModal() {
        let helpModal = this.modalCtrl.create( HelpModal );
    
        helpModal.onDidDismiss( data => {
          if (data) {
            console.log('the data', data); //@DEBUG
          }
        });
    
        helpModal.present();
    
        
      }

    cancel() {
        this.viewCtrl.dismiss();
    }

}
