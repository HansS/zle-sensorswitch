  import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Sensortype } from './sensortype.interface';
import { Sensor } from './sensor.interface';
import { Dayplan } from './dayplan.interface';

@Injectable()
export class SensorService {

  sensortypes: Sensortype[] = [
    {id: 1, name: 'temperature', displayname: 'Temperatur', unit: 'Celsius'},
    {id: 2, name: 'humidity', displayname: 'Feuchtikeit', unit: 'Celsius'},
    {id: 3, name: 'light', displayname: 'Licht', unit: 'Celsius'},
  ] 
  sensors: Sensor[] = [
    {id:1, sensortype: {id:1,name:'temperature',displayname: 'Temperatur',unit:'Celsius'},uuid:'', name: 'Heizung',  isactive: false, setpoint: 20, actualvalue: 18, isdayplan: false, islog: false, 
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20}
    ]},
    {id:2,  sensortype: {id:1,name:'temperature',displayname: 'Temperatur',unit:'Celsius'},uuid:'', name: 'Kühlgerät',  isactive: false, setpoint: 20, actualvalue: 18, isdayplan: false, islog: false,  
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20}
    ]},
    {id:3, sensortype: {id:2,name:'humidity',displayname: 'Feuchtigkeit',unit:'Prozent'}, uuid:'', name: 'Luftbefeuchter', isactive: false, setpoint: 40, actualvalue: 38, isdayplan: false, islog: false,  
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20}
    ]},
    {id:4, sensortype: {id:2,name:'humidity',displayname: 'Feuchtigkeit',unit:'Prozent'},uuid:'', name: 'Lufttrockner', isactive: false, setpoint: 30, actualvalue: 28, isdayplan: false, islog: false,  
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20}
    ]},
    {id:5, sensortype: {id:3,name:'light',displayname: 'Licht',unit:'Lumen'}, uuid:'', name: 'Licht', isactive: false, setpoint: 0,actualvalue: 1, isdayplan: false, islog: false,  
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20},
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20}
    ]}
  ]

  frequencies = ['immer', 'am Tag', 'an Wochentagen'];

  weekdays = ['Mo','Di','Mi','Do','Fr','Sa','So'];

  dayplans: Dayplan[] = [
    { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20},
    { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20},
    { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20},
    { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20},
    { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20},
    { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20},
    { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20}
  ];
 
  constructor(public http: Http) {
    console.log('Hello SensorService');
  }

  getSensortypes(){
    // make a copy of this.sensortypes
    let sensortypes: Sensortype;
    Object.assign(sensortypes, this.sensortypes);
    return sensortypes;
  }

  getSensors(): Sensor[] {
    // make a copy of this.sensors
    //let sensors: Sensor[];
    //Object.assign(sensors, this.sensors)
    return this.sensors;
  }
  getDayplans(): Dayplan[] {
    // make a copy of this.dayplans
    let plans: Dayplan[];
    Object.assign(plans,this.dayplans);
    return plans;
  }
  getWeekdays(): string[] {
    // make a copy of this.weekdays
    let weekdays: string[];
    Object.assign(weekdays, this.weekdays);
    return weekdays;  
  }
} 