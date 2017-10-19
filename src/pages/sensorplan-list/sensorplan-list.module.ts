import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorplanListPage } from './sensorplan-list';

@NgModule({
  declarations: [
    SensorplanListPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorplanListPage),
  ],
  exports: [ SensorplanListPage ]
})
export class SensorplanListPageModule {}
