import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public ORMBench
  public ORMSquat
  public ORMShoulderPress
  public ORMDeadLift
  public week1 = {}
  public set1: string;
  public Bench = 'hello';
  public days: string;
  public exercises = ["Bench","Squat","ShoulderPress","DeadLift"];
  public cycle = [{
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
    for (let ex of this.exercises) {
      let orm = "ORM" + ex
      this.cycle[0].week1[0].set1[ex] = (65/100) * (90/100 * Number([this][0][orm]))
      console.log('ex', this.cycle[0].week1[0].set1[ex]); //@DEBUG
      // console.log('the number', [this][0][ex]); //@DEBUG
      console.log('thing',[this][0][orm] ); //@DEBUG
      // console.log('ormbench', this.ORMBench); //@DEBUG
    }
  }

}
