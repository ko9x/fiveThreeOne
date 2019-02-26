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

  public lightWeights = ["1.2","2.5"," 5","10"]
  public heavyWeights = ["25","35","45","100"]
  public bench = {name:'bench',weight:null};
  public squat = {name:'squat',weight:null};
  public shoulderPress = {name:'shoulderPress',weight:null};
  public deadLift = {name:'deadLift',weight:null};
  public exercises = [this.bench,this.squat,this.shoulderPress,this.deadLift];
  public cycle : FormGroup;
  public test = false;

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

  showORM() {
    this.storage.get('ORMBench').then((data) => {
      console.log('ORM Bench', data); //@DEBUG
    });
    this.storage.get('ORMSquat').then((data) => {
      console.log('ORM Squat', data); //@DEBUG
    });
    this.storage.get('ORMShoulderPress').then((data) => {
      console.log('ORM ShoulderPress', data); //@DEBUG
    });
    this.storage.get('ORMDeadLift').then((data) => {
      console.log('ORM DeadLift', data); //@DEBUG
    });
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


  dataSetTest() {
    this.storage.set('name', 'sean').then((successData) => {
      console.log('stored',successData ); //@DEBUG
    });
  }

  dataGetTest() {
    this.storage.get('name').then((data) => {
      console.log('name', data); //@DEBUG
    })
  }
  
}
