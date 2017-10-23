import { SensorService } from '../sensor/sensor.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../sensor/sensor.interface';
import { SensorplanListPage } from '../sensorplan-list/sensorplan-list';
import { ExpandableComponent } from '../../components/expandable/expandable';


@IonicPage()
@Component({
  selector: 'page-sensor-list',
  templateUrl: 'sensor-list.html',
})
export class SensorListPage {
  items: any = [];
	itemExpandHeight: number = 500;
  sensors: Sensor[];
  gridIsShown = false;
  constructor(private navCtrl: NavController, private service: SensorService) {
    this.sensors = service.getSensors();
    this.items = [
			{expanded: false},
			{expanded: false},
			{expanded: false},
			{expanded: false},
			{expanded: false},
			{expanded: false},
			{expanded: false},
			{expanded: false},
			{expanded: false}
		];
  }
  addSensorplan(sensor: Sensor){
    console.log('addSensorplan:',sensor);
    
    this.navCtrl.push('SensorplanList', sensor);
  }
  addPlan(sensor: Sensor){
    this.navCtrl.push(SensorplanListPage, sensor);
  }
  toggleGrid(){
    this.gridIsShown = !this.gridIsShown;
  }

  expandSensor(sensor: Sensor){
    
        this.sensors.map((listItem) => {
    
          if(sensor == listItem){
            listItem.isdayplan = !listItem.isdayplan;
          } else {
            listItem.isdayplan = false;
          }
    
          return listItem;
    
        });
        
      } // expandItem

  expandItem(item){
    
        this.items.map((listItem) => {
    
          if(item == listItem){
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
    
          return listItem;
    
        });
        
      } // expandItem
} // class