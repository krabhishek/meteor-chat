import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MomentModule } from "angular2-moment";
import { AgmCoreModule } from "@agm/core";
import { Geolocation } from "@ionic-native/geolocation";
import { MyApp } from './app.component';
import { PhoneProvider } from '../providers/phone/phone';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRcu7IwJJVhX0Gi9dkSvmooGx1DUXMJzk'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhoneProvider
  ]
})
export class AppModule {}
