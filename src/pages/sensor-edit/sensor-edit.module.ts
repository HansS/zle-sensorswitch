import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorEditPage } from './sensor-edit';

@NgModule({
  declarations: [
    SensorEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorEditPage),
  ],
})
export class SensorEditPageModule {}
