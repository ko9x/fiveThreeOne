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
  public heavyWeights = ["25","35","45","100"]
  public lightWeights = ["1.2","2.5"," 5","10"]
  public deadLift = {name:'deadLift',weight:null};
  public shoulderPress = {name:'shoulderPress',weight:null};
  public exercises = [this.bench,this.squat,this.shoulderPress,this.deadLift];
  buttons = Array(10).fill(false); // e.g. 10 = size of items

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

      this.cycle = this.formBuilder.group({
        bench: [''],
        squat: [''],
        shoulderPress: [''],
        deadLift: ['']
      });
      
    }
  
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

  selectWeight(weight) {
    this.storage.set('AW' + weight, weight).then((data)=>{
      console.log('set stored weight', data); //@DEBUG
    });
  }

  clearAllWeights() {
    this.heavyWeights.forEach((weight) => {
      this.clearWeight(weight);
    });
    this.lightWeights.forEach((weight) => {
      this.clearWeight(weight);
    });
  }

  clearWeight(weight) {
    this.storage.remove('AW' + weight);
  }

  getAllWeights() {
    this.heavyWeights.forEach((weight) => {
      this.getWeight(weight);
    });
    this.lightWeights.forEach((weight) => {
      this.getWeight(weight);
    });
  }

  getWeight(weight) {
    this.storage.get('AW' + weight).then((data) => {
      console.log('weight', data); //@DEBUG
    });
  }
}
