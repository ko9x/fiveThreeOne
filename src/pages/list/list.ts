import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public cycle : FormGroup;
  public bench = {name:'bench',weight:null};
  public squat = {name:'squat',weight:null};
  public deadLift = {name:'deadLift',weight:null};
  public shoulderPress = {name:'shoulderPress',weight:null};
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
  public lightWeights = [this.OW1_2, this.OW2_5, this.OW5, this.OW10];
  public heavyWeights = [this.OW25, this.OW35, this.OW45, this.OW100];
  public upperButtons = Array(4).fill(false); // e.g. 10 = size of items
  public lowerButtons = Array(4).fill(false); // e.g. 10 = size of items

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public formBuilder: FormBuilder
    ) { 
      

      this.storage.get('ORMBench').then((data) =>{
        this.bench.weight = data;
      });
      this.storage.get('ORMSquat').then((data) =>{
        this.squat.weight = data;
      });
      this.storage.get('ORMShoulderPress').then((data) =>{
        this.shoulderPress.weight = data;
      });
      this.storage.get('ORMDeadLift').then((data) =>{
        this.deadLift.weight = data;
      });

      this.storage.get('OW' + '1.2' + 'disabled').then((data) => {
        if (data === 'true'){
          this.OW1_2.disabled = true;
        } else {
          this.OW1_2.disabled = false;
        };
      });

      this.cycle = this.formBuilder.group({
        bench: [''],
        squat: [''],
        shoulderPress: [''],
        deadLift: ['']
      });
      
    }

  // Exercise Section
  // ORM stands for One Rep Max
  
  setORM() {
    this.storage.set('ORMBench', this.cycle.value.bench);
    this.storage.set('ORMSquat', this.cycle.value.squat);
    this.storage.set('ORMShoulderPress', this.cycle.value.shoulderPress);
    this.storage.set('ORMDeadLift', this.cycle.value.deadLift);
  }

  clearORM() {
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
  }

  // Weight Section
  // OW stands for Olympic Weight
  // I might make another section for standard weight at some point 

  selectWeight(weight) {
    this.storage.set('OW' + weight, weight).then((data) => {
      console.log('set stored weight', data); //@DEBUG
    });
    this.storage.set('OW' + weight + 'disabled', 'true').then((data) => {
      console.log('set weight disabled', data); //@DEBUG
    });
  }

  clearAllWeights() {
    this.heavyWeights.forEach((weight) => {
      this.clearWeight(weight.name);
      weight.disabled = false;
    });
    this.lightWeights.forEach((weight) => {
      this.clearWeight(weight.name);
      weight.disabled = false;
    });
  }

  clearWeight(weight) {
    this.storage.remove('OW' + weight);
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
      console.log('weight', data); //@DEBUG
    });
  }
}
