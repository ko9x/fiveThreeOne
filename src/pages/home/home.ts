import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ORMBench;
  public ORMSquat;
  public ORMShoulderPress;
  public ORMDeadLift;
  public Bench = 'hello';
  public days: string;
  public exercises = ["Bench","Squat","ShoulderPress","DeadLift"];
  public week1Percents = [65, 75, 85];
  public week2Percents = [70, 80, 90];
  public week3Percents = [75, 85, 95];
  public cycle: Array<any> = [{
    week1: [
      {set1: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set2: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set3: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]}
    ],
    week2: [
      {set1: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set2: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set3: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]}
    ],
    week3: [
      {set1: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set2: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set3: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]}
    ]
  }];

  constructor(public navCtrl: NavController, public storage: Storage) {
    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    this.days = weekdays[currentDate.getDay()];
    console.log('days', this.days); //@DEBUG

    this.storage.get('ORMBench').then((data) =>{
      this.ORMBench = data;
    });
    this.storage.get('ORMSquat').then((data) =>{
      this.ORMSquat = data;
    });
    this.storage.get('ORMShoulderPress').then((data) =>{
      this.ORMShoulderPress = data;
    });
    this.storage.get('ORMDeadLift').then((data) =>{
      this.ORMDeadLift = data;
    });
  }

  runIt(){
    console.log('week 1---------'); //@DEBUG
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week1[0].set1[ex] = Math.round((65/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week1 set1', this.cycle[0].week1[0].set1[ex]); //@DEBUG
    }
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week1[1].set2[ex] = Math.round((75/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week1 set2', this.cycle[0].week1[1].set2[ex]); //@DEBUG
    }
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week1[2].set3[ex] = Math.round((85/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week1 set3', this.cycle[0].week1[2].set3[ex]); //@DEBUG
    }
    console.log('week 2----------'); //@DEBUG
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week2[0].set1[ex] = Math.round((70/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week2 set1', this.cycle[0].week2[0].set1[ex]); //@DEBUG
    }
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week2[1].set2[ex] = Math.round((80/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week2 set2', this.cycle[0].week2[1].set2[ex]); //@DEBUG
    }
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week2[2].set3[ex] = Math.round((90/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week2 set3', this.cycle[0].week2[2].set3[ex]); //@DEBUG
    }
    console.log('week 3--------------'); //@DEBUG
    
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week3[0].set1[ex] = Math.round((75/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week3 set1', this.cycle[0].week3[0].set1[ex]); //@DEBUG
    }
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week3[1].set2[ex] = Math.round((85/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week3 set2', this.cycle[0].week3[1].set2[ex]); //@DEBUG
    }
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      let rewNum
      this.cycle[0].week3[2].set3[ex] = Math.round((95/100) * (90/100 * Number(this[orm]))/2.5) * 2.5;
      console.log('week3 set3', this.cycle[0].week3[2].set3[ex]); //@DEBUG
      console.log('mathing',Math.round(this.cycle[0].week3[2].set3[ex]/2.5) * 2.5 ); //@DEBUG
    }
  }

  tryIt() {
    for(let week of this.cycle) {
      for (let set of this.cycle[0].week1) {
        for (let ex of this.exercises) {
          this.cycle[0]
        }
        console.log('set', set); //@DEBUG
      }
      console.log('week', week); //@DEBUG
    }
  }

  mathIt() {
    console.log(Math.round(107.1/2.5) * 2.5 ); //@DEBUG
  }

  displayIt() {
    console.log('display', this.cycle[0].week2); //@DEBUG
  }

}
