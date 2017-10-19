import { Dayplan } from './../sensorplan-add/dayplan.interface';
import { Sensor } from './sensor.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SensorService {

  sensors: Sensor[] = [
    {id:1, uuid:'', name: 'Heizung',typedisplay: 'Temperatur',  type: 'temperature', setpoint: 20, unit: 'C', actualvalue: 18, settype: 'timetable', islog: false, planexpanded: false,
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' }
    ]},
    {id:2, uuid:'', name: 'Kühlgerät',typedisplay: 'Temperatur',   type: 'temperature', setpoint: 20, unit: 'C', actualvalue: 18, settype: 'timetable', islog: false,  planexpanded: false,
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' }
    ]},
    {id:3, uuid:'', name: 'Luftbefeuchter', typedisplay: 'Feuchtigkeit',  type: 'humidity', setpoint: 40, unit: 'percent', actualvalue: 38, settype: 'timetable', islog: false,  planexpanded: false,
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' }
    ]},
    {id:4, uuid:'', name: 'Lufttrockner',typedisplay: 'Feuchtigkeit',   type: 'humidity', setpoint: 30, unit: 'percent', actualvalue: 28, settype: 'timetable', islog: false,  planexpanded: false,
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' }
    ]},
    {id:5, uuid:'', name: 'Licht', typedisplay: 'Licht',  type: 'light', setpoint: 0, unit: 'lumen', actualvalue: 1, settype: 'timetable', islog: false,  planexpanded: false,
    dayplans: [
      { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
      { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' }
    ]}
  ]

  frequencies = ['immer', 'am Tag', 'an Wochentagen'];
  weekdays = ['Mo','Di','Mi','Do','Fr','Sa','So'];
  dayplans: Dayplan[] = [
    { day: 'Mo', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
    { day: 'Di', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
    { day: 'Mi', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
    { day: 'Do', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
    { day: 'Fr', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
    { day: 'Sa', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' },
    { day: 'So', fromtime: '00:00', totime: '23:00', setpoint: 20, unit: 'C' }
  ];
 
  constructor(public http: Http) {
    console.log('Hello SensorService');
  }
  getSensors(){
    return this.sensors;
  }
  getDayplans(){
    let plans: Dayplan[];
    Object.assign(plans,this.dayplans);
    return plans;
  }
  getWeekdays(){
    return this.weekdays;  
  }
} 