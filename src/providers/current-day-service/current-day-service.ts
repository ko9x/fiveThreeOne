import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';



@Injectable()
export class CurrentDayService {
  public name: string;
  public email: string;
  public userId: number;
  public password: string;
  public authToken: string;
  public pendingInvites: Array<Object>;

  constructor(
    public storage: Storage,
    ) {
  }

 
  
  setCurrentDay(day) {
    this.storage.set('currentDay', day);
  }

  getCurrentDay() {
    return this.storage.get('currentDay');
  }

//   authLogin(email, password) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });

//     const body = {
//       email: email,
//       password: password
//     };

//     return this.http.post( `${this.apiURL}/login`, body, {headers: headers} )
//     .map( (response: any) => {
//       if( response.success ) {
//         this.name = response.name;
//         this.events.publish('userName:updated');
//         this.userId = response.user_id;
//         this.authToken = response.token;
//         this.storage.set( 'loggedIn', true );
//         this.storage.set( 'username', email );
//         this.storage.set( 'password', password );
//         this.pendingInvites = response.pending_invites;
//         this.events.publish('pendingInvites:updated');
//         return response;
//       }
      
//       return response;
//     });
//   }

}
