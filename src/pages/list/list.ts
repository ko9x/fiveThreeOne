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

  public exercises = ["bench","squat","shoulderPress","deadLift"];
  public bench = {};
  public squat = {};
  public shoulderPress = {};
  public deadLift = {};
  public cycle : FormGroup;
  public test = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public formBuilder: FormBuilder
    ) { 
      

      this.storage.get('ORMBench').then((data) =>{
        this.cycle.value.bench = data;
      });
      this.storage.get('ORMSquat').then((data) =>{
        this.cycle.value.squat = data;
      });
      this.storage.get('ORMShoulderPress').then((data) =>{
        this.cycle.value.shoulderPress = data;
      });
      this.storage.get('ORMDeadLift').then((data) =>{
        this.cycle.value.deadLift = data;
      });
      

      this.cycle = this.formBuilder.group({
        bench: ['',],
        squat: [''],
        shoulderPress: [''],
        deadLift: ['']
      });
      
    }

  testValue() {
    this.test = !this.test;
  }
  
  setORM() {
    this.storage.set('ORMBench', this.cycle.value.bench)
    this.storage.set('ORMSquat', this.cycle.value.squat)
    this.storage.set('ORMShoulderPress', this.cycle.value.shoulderPress)
    this.storage.set('ORMDeadLift', this.cycle.value.deadLift)
    console.log('formData', this.cycle.value); //@DEBUG
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
