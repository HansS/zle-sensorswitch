import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorListPage } from './sensor-list';
import {ComponentsModule  } from "../../components/components.module";
import { ExpandableComponent } from '../../components/expandable/expandable';

@NgModule({
  declarations: [
    SensorListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SensorListPage),
  ],
  exports: [ SensorListPage]
})
export class SensorListPageModule {}
