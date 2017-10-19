import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorplanEditPage } from './sensorplan-edit';

@NgModule({
  declarations: [
    SensorplanEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorplanEditPage),
  ],
})
export class SensorplanEditPageModule {}
