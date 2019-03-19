import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Platform, Events } from 'ionic-angular';
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
    public http: HttpClient, 
    public platform: Platform, 
    public storage: Storage,
    public events: Events
    ) {
  }

  /**
   * clears the login and password from local storage (for debugging)
   */
  clearLoginAndPass() {
    return this.storage.remove( 'username' ).then((cleared) => {
      return this.storage.remove( 'password' );
    });
  }

  clearLoginInfo(){
    this.authToken = '';
    this.name = '';
    this.storage.remove( 'loggedIn' );
  }
  
  loginStatus() {
    return this.storage.get( 'loggedIn' );
  }
  
  rememberUsername() {
    return this.storage.get( 'username' );
  }

  rememberPass() {
    return this.storage.get( 'password' );
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

  updatePendingInvites(inviteToRemove) {
    this.pendingInvites = this.pendingInvites.filter((invite: any) => {
      return invite.id != inviteToRemove.id
    });
    this.events.publish('pendingInvites:updated');
  }

}
