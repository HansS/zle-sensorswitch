import { Sensor } from './../../pages/sensor-edit/sensor.interface';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SensorProvider {

  sensors: Sensor[] = [
    {id:1, uuid:'', name: 'Heizung',typedisplay: 'Temperatur',  type: 'temperature', setpoint: 20, unit: 'celsius', actualvalue: 18, settype: 'timetable', islog: false},
    {id:2, uuid:'', name: 'Kühlgerät',typedisplay: 'Temperatur',   type: 'temperature', setpoint: 20, unit: 'celsius', actualvalue: 18, settype: 'timetable', islog: false},
    {id:3, uuid:'', name: 'Luftbefeuchter', typedisplay: 'Feuchtigkeit',  type: 'humidity', setpoint: 40, unit: 'percent', actualvalue: 38, settype: 'timetable', islog: false},
    {id:4, uuid:'', name: 'Lufttrockner',typedisplay: 'Feuchtigkeit',   type: 'humidity', setpoint: 30, unit: 'percent', actualvalue: 28, settype: 'timetable', islog: false},
    {id:5, uuid:'', name: 'Licht', typedisplay: 'Licht',  type: 'light', setpoint: 0, unit: 'lumen', actualvalue: 1, settype: 'timetable', islog: false},
  ]
  constructor(public http: Http) {
    console.log('Hello SensorProvider Provider');
  }
  getSensors(){
    return this.sensors;
  }
}
