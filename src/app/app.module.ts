import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SelectDayModal } from '../modals/select-day/select-day-modal';

import { AddSpacePipe } from '../pipes/add-space/add-space';
import { HalfWeightPipe } from '../pipes/half-weight/half-weight';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    SelectDayModal,
    AddSpacePipe,
    HalfWeightPipe

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    SelectDayModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddSpacePipe,
    HalfWeightPipe
  ]
})
export class AppModule {}
