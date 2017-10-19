import { SensorService } from './../sensor/sensor.service';
import { Dayplan } from './dayplan.interface';
import { Sensorplan } from './sensorplan.interface';
import { Sensor } from '../sensor-edit/sensor.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sensorplan-add',
  templateUrl: 'sensorplan-add.html',
})
export class SensorplanAddPage {

  sensor: Sensor;
  sensorplan: Sensorplan;
  weekdays: string[];
  weekplans: Dayplan[];
   constructor(private navCtrl: NavController, 
                          private service: SensorService,
                          private navParams: NavParams) {
    console.dir('SensorplanAddPage.Constructor:', navParams.data);
    console.dir('sensorplan.constructor-days',this.weekdays = this.service.getWeekdays());
    
    this.sensor = this.navParams.data;
    /*     id, sensorid,name,  frequency //  allways, daily, weekly
        fromtime,totime,setpoint, unit */
    this.sensorplan = { id: 0, sensorid: this.sensor.id, name: this.sensor.name + ' ' + this.sensor.typedisplay, frequency: 'immer', weekdays:  this.service.getWeekdays() };
  
} // constructor
} // class
