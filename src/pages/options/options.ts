import { Component } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DeloadModal } from '../../modals/deload/deload-modal';
import { TMTestModal } from '../../modals/tm-test/tm-test-modal';
import { NextCycleModal } from '../../modals/next-cycle/next-cycle-modal';
import { HelpModal } from '../../modals/help/help-modal';


@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  currentCycle: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public storage: Storage
    ) {

      this.currentCycle = navParams.get('currentCycle')
      console.log('currentCycle', this.currentCycle); //@DEBUG
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

}
