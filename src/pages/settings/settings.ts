import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public cycle : FormGroup;
  public bench = {name:'bench',ORMWeight:null,TMWeight:null};
  public squat = {name:'squat',ORMWeight:null,TMWeight:null};
  public deadLift = {name:'deadLift',ORMWeight:null,TMWeight:null};
  public shoulderPress = {name:'shoulderPress',ORMWeight:null,TMWeight:null};
  public exercises = [this.bench,this.squat,this.shoulderPress,this.deadLift];
  public OW1_2 = {name: '1.2', disabled: false};
  public OW2_5 = {name: '2.5', disabled: false};
  public OW5 = {name: '5', disabled: false};
  public OW10 = {name: '10', disabled: false};
  public OW25 = {name: '25', disabled: false};
  public OW35 = {name: '35', disabled: false};
  public OW45 = {name: '45', disabled: false};
  public OW100 = {name: '100', disabled: false};
  public lightWeightNames = ['1.2','2.5','5','10'];
  public heavyWeightNames = ['25','35','45','100'];
  public lightWeights = [this.OW1_2,this.OW2_5,this.OW5,this.OW10];
  public heavyWeights = [this.OW25,this.OW35,this.OW45,this.OW100];
  public upperButtons = Array(4).fill(false); // e.g. 10 = size of items
  public lowerButtons = Array(4).fill(false); // e.g. 10 = size of items

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
    ) { 
      

      this.storage.get('ORMBench').then((data) =>{
        this.bench.ORMWeight = data;
      });
      this.storage.get('ORMSquat').then((data) =>{
        this.squat.ORMWeight = data;
      });
      this.storage.get('ORMShoulderPress').then((data) =>{
        this.shoulderPress.ORMWeight = data;
      });
      this.storage.get('ORMDeadLift').then((data) =>{
        this.deadLift.ORMWeight = data;
      });
      this.storage.get('TMBench').then((data) =>{
        this.bench.TMWeight = data;
      });
      this.storage.get('TMSquat').then((data) =>{
        this.squat.TMWeight = data;
      });
      this.storage.get('TMShoulderPress').then((data) =>{
        this.shoulderPress.TMWeight = data;
      });
      this.storage.get('TMDeadLift').then((data) =>{
        this.deadLift.TMWeight = data;
      });

      // Can this work? At the moment it takes too long and the page loads before it is done

      // for (let name of this.lightWeightNames) {
      //   console.log('name', name); //@DEBUG
      //   this.storage.get('OW' + name + 'disabled').then((data) => {
      //     console.log('data', data); //@DEBUG
      //     if (data === 'true'){
      //       this.lightWeights[0].disabled = true;
      //       console.log('the thing', this.lightWeights[0]); //@DEBUG
      //     } else {
      //       this.lightWeights[0].disabled = false;
      //     }
      //   });
      // };


      // This is obviously too repetitive

      this.storage.get('OW' + '1.2' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW1_2.disabled = true;
        } else {
          this.OW1_2.disabled = false;
        };
      });
      this.storage.get('OW' + '2.5' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW2_5.disabled = true;
        } else {
          this.OW2_5.disabled = false;
        };
      });
      this.storage.get('OW' + '5' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW5.disabled = true;
        } else {
          this.OW5.disabled = false;
        };
      });
      this.storage.get('OW' + '10' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW10.disabled = true;
        } else {
          this.OW10.disabled = false;
        };
      });
      this.storage.get('OW' + '25' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW25.disabled = true;
        } else {
          this.OW25.disabled = false;
        };
      });
      this.storage.get('OW' + '35' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW35.disabled = true;
        } else {
          this.OW35.disabled = false;
        };
      });
      this.storage.get('OW' + '45' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW45.disabled = true;
        } else {
          this.OW45.disabled = false;
        };
      });
      this.storage.get('OW' + '100' + 'disabled').then((data) => {
        console.log('data', data); //@DEBUG
        if (data === 'true'){
          this.OW100.disabled = true;
        } else {
          this.OW100.disabled = false;
        };
      });

      this.cycle = this.formBuilder.group({
        bench: ['', Validators.required],
        squat: ['', Validators.required],
        shoulderPress: ['', Validators.required],
        deadLift: ['', Validators.required]
      });
      
    }
  // constructor ends


  
  // Exercise Section
  // ORM stands for One Rep Max
  
  setORM() {
    this.storage.set('ORMBench', this.cycle.value.bench);
    this.storage.set('ORMSquat', this.cycle.value.squat);
    this.storage.set('ORMShoulderPress', this.cycle.value.shoulderPress);
    this.storage.set('ORMDeadLift', this.cycle.value.deadLift);
    let TMB = 90/100 * Number(this.cycle.value.bench)/5 * 5
    let TMS = 90/100 * Number(this.cycle.value.squat)/5 * 5
    let TMSP = 90/100 * Number(this.cycle.value.shoulderPress)/5 * 5
    let TMDL = 90/100 * Number(this.cycle.value.deadLift)/5 * 5
    this.storage.set('TMBench', TMB.toString())
    this.storage.set('TMSquat', TMS.toString())
    this.storage.set('TMShoulderPress', TMSP.toString())
    this.storage.set('TMDeadLift', TMDL.toString())
    
      const toast = this.toastCtrl.create({
        message: 'Successfully saved One Rep Maxes',
        duration: 1500,
        position: 'top'
      });
      toast.present();
  }

  tapClearORM() {
    const confirm = this.alertCtrl.create({
      title: 'Are You Sure?',
      message: 'Clearing your One Rep Maxes will also clear your Training Maxes',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: "Yes",
          handler: () => {
            this.clearMaxes();
          }
        }
      ]
    });
    confirm.present();
    
  }

  clearMaxes() {
    this.storage.remove('ORMBench').then((data) => {
      console.log('ORM Bench', data); //@DEBUG
    });
    this.storage.remove('ORMSquat').then((data) => {
      console.log('ORM Squat', data); //@DEBUG
    });
    this.storage.remove('ORMShoulderPress').then((data) => {
      console.log('ORM ShoulderPress', data); //@DEBUG
    });
    this.storage.remove('ORMDeadLift').then((data) => {
      console.log('ORM DeadLift', data); //@DEBUG
    });
    this.storage.remove('TMBench').then((data) => {
      console.log('TM Bench', data); //@DEBUG
    });
    this.storage.remove('TMSquat').then((data) => {
      console.log('TM Squat', data); //@DEBUG
    });
    this.storage.remove('TMShoulderPress').then((data) => {
      console.log('TM ShoulderPress', data); //@DEBUG
    });
    this.storage.remove('TMDeadLift').then((data) => {
      console.log('TM DeadLift', data); //@DEBUG
    });

     this.exercises = 
     [
      this.bench = {name:'bench',ORMWeight:null,TMWeight:null},
      this.squat = {name:'squat',ORMWeight:null,TMWeight:null},
      this.shoulderPress = {name:'shoulderPress',ORMWeight:null,TMWeight:null},
      this.deadLift = {name:'deadLift',ORMWeight:null,TMWeight:null}
     ];
  }

  // Weight Section
  // OW stands for Olympic Weight
  // I might make another section for standard weight at some point 

  selectWeight(weight) {
    this.storage.set('OW' + weight, weight).then((data) => {
    });
    this.storage.set('OW' + weight + 'disabled', 'true').then((data) => {
    });
  }

  clearAllWeights() {
    this.lightWeights.forEach((weight) => {
      this.clearWeight(weight.name);
      this.enableWeight(weight.name);
      
    });
    this.heavyWeights.forEach((weight) => {
      this.clearWeight(weight.name);
      this.enableWeight(weight.name);
    });

    this.lightWeights = 
        [
          this.OW1_2 = {name: '1.2', disabled: false}, 
          this.OW2_5 = {name: '2.5', disabled: false}, 
          this.OW5 = {name: '5', disabled: false}, 
          this.OW10 = {name: '10', disabled: false}
        ];
    this.heavyWeights = 
        [
          this.OW25 = {name: '25', disabled: false}, 
          this.OW35 = {name: '35', disabled: false}, 
          this.OW45 = {name: '45', disabled: false}, 
          this.OW100 = {name: '100', disabled: false}
        ];
  }

  clearWeight(weight) {
    this.storage.remove('OW' + weight);
  }
  enableWeight(weight) {
    this.storage.remove('OW' + weight + 'disabled');
  }

  getAllWeights() {
    this.heavyWeights.forEach((weight) => {
      this.getWeight(weight.name);
    });
    this.lightWeights.forEach((weight) => {
      this.getWeight(weight.name);
    });
  }

  getWeight(weight) {
    this.storage.get('OW' + weight).then((data) => {
    });
  }
}
