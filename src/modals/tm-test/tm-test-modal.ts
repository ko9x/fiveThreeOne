import { Component } from '@angular/core';
import { ViewController, NavController, AlertController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home';


@Component({
    selector: 'tm-test-modal',
    templateUrl: 'tm-test-modal.html'
})
export class TMTestModal {

    public tmt = 'Training Max Test';
    public day = 'monday'
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
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public app: App
    ) {
        
       
    }

    TMTAlert() {
        const confirm = this.alertCtrl.create({
          title: 'Begin Training Max Test?',
          message: 'This will replace your normal workout calendar with a one week TM Test calendar.',
          buttons: [
            {
              text: 'Disagree',
              handler: () => {
              }
            },
            {
              text: 'Agree',
              handler: () => {
                this.beginTMTest()
              }
            }
          ]
        });
        confirm.present();
      }

    cancel() {
        this.viewCtrl.dismiss();
    }

    beginTMTest() {
      this.viewCtrl.dismiss().then(() => {
        this.app.getRootNav().setRoot(HomePage, {tmt:this.tmt, day:this.day});
    });
    }

}
