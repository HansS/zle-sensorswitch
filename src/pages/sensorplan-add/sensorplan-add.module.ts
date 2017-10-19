import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorplanAddPage } from './sensorplan-add';

@NgModule({
  declarations: [
    SensorplanAddPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorplanAddPage),
  ],
  exports: [ SensorplanAddPage ]
})
export class SensorplanAddPageModule {}
