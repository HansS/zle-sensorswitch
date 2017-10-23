import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SensorService } from '../pages/sensor/sensor.service';
// sensor list
import { SensorListPageModule } from './../pages/sensor-list/sensor-list.module';
//import { SensorListPage } from "../pages/sensor-list/sensor-list";
// sensorplan list
import { SensorplanListPageModule } from '../pages/sensorplan-list/sensorplan-list.module';
//import { SensorplanListPage } from '../pages/sensorplan-list/sensorplan-list';
// sensorplan add
import { SensorplanAddPageModule } from '../pages/sensorplan-add/sensorplan-add.module';
//import { SensorplanAddPage } from '../pages/sensorplan-add/sensorplan-add';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    SensorListPageModule,
    SensorplanListPageModule,
    SensorplanAddPageModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //SensorplanListPage,
    //SensorListPage,
    //SensorplanAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SensorService
  ]
})
export class AppModule {}
