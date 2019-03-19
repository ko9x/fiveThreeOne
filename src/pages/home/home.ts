import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SelectDayModal } from '../../modals/select-day/select-day-modal';
import { OptionsPage } from '../options/options';
import { CurrentDayService } from '../../providers/current-day-service/current-day-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tmt: string;
  public tmtMonday = false;
  public tmtFriday = false;
  public day: string;
  public week: string;
  public currentCycle = 'Cycle 1';
  public UBWorkoutTitle = 'Bench';
  public LBWorkoutTitle = 'Squat';
  public TMBench;
  public TMSquat;
  public TMShoulderPress;
  public TMDeadLift;
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
  public TMTCycle: Array<any> = [{
    TMTWeek: [
      {set1: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set2: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set3: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]},
      {set4: [{Bench: "" },{Squat: ""},{ShoulderPress: ""},{DeadLift: ""}]}
    ]
  }]
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
    TMUBSets = [
      {name: 'set 1', weight: "", reps: '1 x 5'},
      {name: 'set 2', weight: "", reps: '1 x 5'},
      {name: 'set 3', weight: "", reps: '1 x 5'},
      {name: 'set 4', weight: "", reps: '1 x 3-5'}
    ]
    TMLBSets = [
      {name: 'set 1', weight: "", reps: '1 x 5'},
      {name: 'set 2', weight: "", reps: '1 x 5'},
      {name: 'set 3', weight: "", reps: '1 x 5'},
      {name: 'set 4', weight: "", reps: '1 x 3-5'}
    ]

  reps = [
    ['1 x 5', '1 x 3', '1 x 5'],['1 x 5', '1 x 3', '1 x 3'],['1 x 5(ARAP)', '1 x 3(ARAP)', '1 x 1(ARAP)']
  ]


  constructor(
    public navCtrl: NavController, 
    public storage: Storage, 
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public currentDayService: CurrentDayService
    ) {
    let currentDate = new Date();
    let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    this.days = weekdays[currentDate.getDay()];
    console.log('days', this.days); //@DEBUG

    this.retrieveStorageData();
    this.tmt = this.navParams.get('tmt');
    this.getCurrentDay();
    
    if(this.tmt) {
      console.log('thisday', this.day); //@DEBUG
      if(this.day === "monday") {
        this.tmtMonday = true;
        console.log('tmtMonday', this.tmtMonday); //@DEBUG
      } else if(this.day === "friday") {
        this.tmtFriday = true;
        console.log('tmtFriday', this.tmtFriday); //@DEBUG
      }
      console.log('right here', this.day); //@DEBUG
      this.currentCycle = this.tmt;
      setTimeout(() => {
        this.TMTRun();  }, 600);
  
        setTimeout(() => {
          this.displayTMTWorkout();  }, 800);
    } else {
      setTimeout(() => {
        this.runIt();  }, 600);
  
        setTimeout(() => {
          this.displayWorkout();  }, 800);
    }

  }

  setCurrentDay(day) {
    this.currentDayService.setCurrentDay(day);
  }

  getCurrentDay() {
    this.currentDayService.getCurrentDay().then((currentDay) => {
      if(currentDay) {
        this.day = currentDay;
      }
      console.log('new func', this.day); //@DEBUG
    });
  }
  

  retrieveStorageData() {
    this.storage.get('TMBench').then((data) =>{
      this.TMBench = data;
      console.log('tmBench', data); //@DEBUG
    });
    this.storage.get('TMSquat').then((data) =>{
      this.TMSquat = data;
      console.log('tmSquat', data); //@DEBUG
    });
    this.storage.get('TMShoulderPress').then((data) =>{
      this.TMShoulderPress = data;
      console.log('tmShoulder', data); //@DEBUG
    });
    this.storage.get('TMDeadLift').then((data) =>{
      this.TMDeadLift = data;
      console.log('tmDead', data); //@DEBUG
    });
    this.storage.get('currentWeek').then((data) => {
      this.week = data;
    });
    this.storage.get('currentDay').then((data) => {
      this.day = data;
      console.log('end retrieve', this.day); //@DEBUG
    });
    
    
  }

  TMTRun(){
    console.log('start tmtrun', this.day); //@DEBUG
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[0].set1[index][ex] = Math.round((70/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[1].set2[index][ex] = Math.round((80/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[2].set3[index][ex] = Math.round((90/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[3].set4[index][ex] = Math.round((100/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
  }

  runIt(){
    console.log('TMTWeek -------');
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[0].set1[index][ex] = Math.round((70/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[1].set2[index][ex] = Math.round((80/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[2].set3[index][ex] = Math.round((90/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.TMTCycle[0].TMTWeek[3].set4[index][ex] = Math.round((100/100) * this[tm]/5) * 5;
      console.log('TMT', this.TMTCycle[0].TMTWeek[0].set1[index]); //@DEBUG
    });
    console.log('tmtCycle', this.TMTCycle); //@DEBUG
    console.log('week 1---------'); //@DEBUG
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week1[0].set1[index][ex] = Math.round((65/100) * this[tm]/5) * 5;
      console.log('week1 set1', this.cycle[0].week1[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week1[1].set2[index][ex] = Math.round((75/100) * this[tm]/5) * 5;
      console.log('week1 set2', this.cycle[0].week1[1].set2[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week1[2].set3[index][ex] = Math.round((85/100) * this[tm]/5) * 5;
      console.log('week1 set3', this.cycle[0].week1[2].set3[index]); //@DEBUG
    });
    console.log('week 2----------'); //@DEBUG
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week2[0].set1[index][ex] = Math.round((70/100) * this[tm]/5) * 5;
      console.log('week2 set1', this.cycle[0].week2[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week2[1].set2[index][ex] = Math.round((80/100) * this[tm]/5) * 5;
      console.log('week2 set2', this.cycle[0].week2[1].set2[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week2[2].set3[index][ex] = Math.round((90/100) * this[tm]/5) * 5;
      console.log('week2 set3', this.cycle[0].week2[2].set3[index]); //@DEBUG
    });
    console.log('week 3--------------'); //@DEBUG
    
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week3[0].set1[index][ex] = Math.round((75/100) * this[tm]/5) * 5;
      console.log('week3 set1', this.cycle[0].week3[0].set1[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week3[1].set2[index][ex] = Math.round((85/100) * this[tm]/5) * 5;
      console.log('week3 set2', this.cycle[0].week3[1].set2[index]); //@DEBUG
    });
    this.exercises.forEach((ex, index) => {
      let tm = "TM" + ex
      this.cycle[0].week3[2].set3[index][ex] = Math.round((95/100) * this[tm]/5) * 5;
      console.log('week3 set3', this.cycle[0].week3[2].set3[index]); //@DEBUG
      // console.log('mathing',Math.round(this.cycle[0].week3[2].set3[ex]/2.5) * 2.5 ); //@DEBUG
    });

  }

  selectDayModal() {
    let sdModal = this.modalCtrl.create( SelectDayModal, {tmt:this.tmt} );

    sdModal.onDidDismiss( data => {
      console.log('select day', data); //@DEBUG
      if (data.week) {
        this.week = data.week.replace(/\s/g, '').toLowerCase();
        this.storage.set('currentWeek', data.week.replace(/\s/g, '').toLowerCase());
        this.setCurrentDay(data.day.toLowerCase());
        this.getCurrentDay();
        // this.day = data.day.toLowerCase();
        // this.storage.set('currentDay', data.day.toLowerCase())
      } else {
        this.setCurrentDay(data.day.toLowerCase());
        this.getCurrentDay();
        // this.day = data.day.toLowerCase();
        // this.storage.set('currentDay', data.day.toLowerCase())
      }
      this.displayWorkout();
    });

    sdModal.present();

    
  }

  displayTMTWorkout() {
    console.log('start tmt ', this.day); //@DEBUG
    let cycle = this.TMTCycle[0];
    console.log('cycle TMT', cycle.TMTWeek); //@DEBUG
    if(this.day === "monday") {
      console.log('tmtworkout monday', this.day); //@DEBUG
      this.LBWorkoutTitle = "Squat";
      this.TMUBSets[0].weight = cycle.TMTWeek[0].set1[1].Squat;
      this.TMUBSets[1].weight = cycle.TMTWeek[1].set2[1].Squat;
      this.TMUBSets[2].weight = cycle.TMTWeek[2].set3[1].Squat;
      this.TMUBSets[3].weight = cycle.TMTWeek[3].set4[1].Squat;
    } else if(this.day === "wednesday") {
      console.log('tmtworkout wednesday', this.day); //@DEBUG
      this.UBWorkoutTitle = "Shoulder Press";
      this.LBWorkoutTitle = "Dead Lift";
      this.TMUBSets[0].weight = cycle.TMTWeek[0].set1[2].ShoulderPress;
      this.TMUBSets[1].weight = cycle.TMTWeek[1].set2[2].ShoulderPress;
      this.TMUBSets[2].weight = cycle.TMTWeek[2].set3[2].ShoulderPress;
      this.TMUBSets[3].weight = cycle.TMTWeek[3].set4[2].ShoulderPress;
      this.TMUBSets[0].weight = cycle.TMTWeek[0].set1[3].DeadLift;
      this.TMUBSets[1].weight = cycle.TMTWeek[1].set2[3].DeadLift;
      this.TMUBSets[2].weight = cycle.TMTWeek[2].set3[3].DeadLift;
      this.TMUBSets[3].weight = cycle.TMTWeek[3].set4[3].DeadLift;
    } else {
      console.log('tmtworkout friday', this.day); //@DEBUG
      this.UBWorkoutTitle = "Bench";
      this.TMUBSets[0].weight = cycle.TMTWeek[0].set1[0].Bench;
      this.TMUBSets[1].weight = cycle.TMTWeek[1].set2[0].Bench;
      this.TMUBSets[2].weight = cycle.TMTWeek[2].set3[0].Bench;
      this.TMUBSets[3].weight = cycle.TMTWeek[3].set4[0].Bench;
    }
  }

  displayWorkout() {
    this.displayTMTWorkout();
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
      this.navCtrl.push( OptionsPage, {currentCycle:this.currentCycle});
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
    this.storage.set('currentWeek',this.week);
    this.storage.set('currentDay', this.day);
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
