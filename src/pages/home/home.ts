import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SelectDayModal } from '../../modals/select-day/select-day-modal';
import { NextCycleModal } from '../../modals/next-cycle/next-cycle-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public day: string;
  public week: string;
  public currentCycle: 'Cycle 1';
  public UBWorkoutTitle = 'Bench'
  public LBWorkoutTitle = 'Squat'
  public ORMBench;
  public ORMSquat;
  public ORMShoulderPress;
  public ORMDeadLift;
  public weightPerSide = true;
  public days: string;
  public exercises = ["Bench","Squat","ShoulderPress","DeadLift"];
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
  UBSets = [
      {name: 'set 1', weight: "", reps: ""},
      {name: 'set 2', weight: "", reps: ""},
      {name: 'set 3', weight: "", reps: ""}
    ]
  LBSets = [
      {name: 'set 1', weight: "", reps: ""},
      {name: 'set 2', weight: "", reps: ""},
      {name: 'set 3', weight: "", reps: ""}
    ]

  reps = [
    ['1 x 5', '1 x 3', '1 x 5'],['1 x 5', '1 x 3', '1 x 3'],['1 x 5(ARAP)', '1 x 3(ARAP)', '1 x 1(ARAP)']
  ]

  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController) {
    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    this.days = weekdays[currentDate.getDay()];
    console.log('days', this.days); //@DEBUG

    this.retrieveStorageData();

    setTimeout(() => {
      this.runIt();  }, 600);

      setTimeout(() => {
        this.displayWorkout();  }, 800);
  }

  retrieveStorageData() {
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
    this.storage.get('currentWeek').then((data) => {
      this.week = data;
    });
    this.storage.get('currentDay').then((data) => {
      this.day = data;
    });
    
  }

  runIt(){
    console.log('week 1---------'); //@DEBUG
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week1[0].set1[index][ex] = Math.round((65/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week1 set1', this.cycle[0].week1[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week1[1].set2[index][ex] = Math.round((75/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week1 set2', this.cycle[0].week1[1].set2[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week1[2].set3[index][ex] = Math.round((85/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week1 set3', this.cycle[0].week1[2].set3[index]); //@DEBUG
    });
    console.log('week 2----------'); //@DEBUG
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week2[0].set1[index][ex] = Math.round((70/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week2 set1', this.cycle[0].week2[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week2[1].set2[index][ex] = Math.round((80/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week2 set2', this.cycle[0].week2[1].set2[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week2[2].set3[index][ex] = Math.round((90/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week2 set3', this.cycle[0].week2[2].set3[index]); //@DEBUG
    });
    console.log('week 3--------------'); //@DEBUG
    
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week3[0].set1[index][ex] = Math.round((75/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week3 set1', this.cycle[0].week3[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week3[1].set2[index][ex] = Math.round((85/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week3 set2', this.cycle[0].week3[1].set2[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let orm = "ORM" + ex
      this.cycle[0].week3[2].set3[index][ex] = Math.round((95/100) * (90/100 * Number(this[orm]))/5) * 5;
      console.log('week3 set3', this.cycle[0].week3[2].set3[index]); //@DEBUG
      // console.log('mathing',Math.round(this.cycle[0].week3[2].set3[ex]/2.5) * 2.5 ); //@DEBUG
    });

  }

  selectDayModal() {
    let sdModal = this.modalCtrl.create( SelectDayModal );

    sdModal.onDidDismiss( data => {
      if (data) {
        this.week = data.week.replace(/\s/g, '').toLowerCase();
        this.storage.set('currentWeek', data.week.replace(/\s/g, '').toLowerCase());
        this.day = data.day.toLowerCase();
        this.storage.set('currentDay', data.day.toLowerCase())
      }
      this.displayWorkout();
    });

    sdModal.present();

    
  }
  nextCycleModal() {
    let ncModal = this.modalCtrl.create( NextCycleModal );

    ncModal.onDidDismiss( data => {
      if (data) {
        console.log('the data', data); //@DEBUG
      }
      this.displayWorkout();
    });

    ncModal.present();

    
  }

  displayWorkout() {
    let cycle = this.cycle[0];
    let week = this.week || 'week1'
      console.log('cycle', cycle ); //@DEBUG
      console.log('week', week ); //@DEBUG
      if( week === "week1") {
        this.reps.forEach((rep, index) => {
          this.UBSets[index].reps = rep[0]
          this.LBSets[index].reps = rep[0]
        });
      }
      if( week === "week2") {
        this.reps.forEach((rep, index) => {
          this.UBSets[index].reps = rep[1]
          this.LBSets[index].reps = rep[1]
        });
      }
      if( week === "week3") {
        this.reps.forEach((rep, index) => {
          this.UBSets[index].reps = rep[2]
          this.LBSets[index].reps = rep[2]
        });
      }
      console.log('UBSets', this.UBSets); //@DEBUG
      if( this.day !== "wednesday") {
        this.UBWorkoutTitle = "Bench";
        this.LBWorkoutTitle = "Squat";
        this.UBSets[0].weight = cycle[week][0].set1[0].Bench;
        this.UBSets[1].weight = cycle[week][1].set2[0].Bench;
        this.UBSets[2].weight = cycle[week][2].set3[0].Bench;
        this.LBSets[0].weight = cycle[week][0].set1[1].Squat;
        this.LBSets[1].weight = cycle[week][1].set2[1].Squat;
        this.LBSets[2].weight = cycle[week][2].set3[1].Squat;
      } else {
        this.UBWorkoutTitle = "Shoulder Press";
        this.LBWorkoutTitle = "Dead Lift";
        this.UBSets[0].weight = cycle[week][0].set1[2].ShoulderPress;
        this.UBSets[1].weight = cycle[week][1].set2[2].ShoulderPress;
        this.UBSets[2].weight = cycle[week][2].set3[2].ShoulderPress;
        this.LBSets[0].weight = cycle[week][0].set1[3].DeadLift;
        this.LBSets[1].weight = cycle[week][1].set2[3].DeadLift;
        this.LBSets[2].weight = cycle[week][2].set3[3].DeadLift;
      }
  }

  switchSetWeightDisplay() {
    this.weightPerSide = !this.weightPerSide;
  }

  nextWorkout() {
    if(this.week === 'week3' && this.day === 'friday') {
      this.nextCycleModal();
      return;
    }
    if(this.day === "wednesday") {
      console.log('start of 2nd', this.day); //@DEBUG
      this.day = "friday";
      console.log('wednesday was true',this.day ); //@DEBUG
    }else if(this.day === "monday") {
      console.log('start of first', this.day); //@DEBUG
      this.day = "wednesday";
      console.log('monday was true',this.day ); //@DEBUG
    }else if(this.day === 'friday') {
      let week = this.week
      let num = Number(week[4]) + 1
      let strNum = num.toString()
      this.week = 'week' + strNum;
      this.day = 'monday';
    }
  }

  displayIt() {
    console.log('week', this.week); //@DEBUG
    let start = this.cycle[0];
    let week = this.week
    console.log('display', start[week][0].set1[0].Bench); //@DEBUG
    console.log('testing', this.UBSets[0].weight); //@DEBUG
    console.log('raw', this.cycle); //@DEBUG
  }

}
