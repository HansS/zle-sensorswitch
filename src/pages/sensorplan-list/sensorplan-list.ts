import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../sensor/sensor.interface';
import { SensorplanAddPage } from '../sensorplan-add/sensorplan-add';

/**
 * Generated class for the SensorplanListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensorplan-list',
  templateUrl: 'sensorplan-list.html',
})
export class SensorplanListPage {

    sensor: Sensor;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    
    this.sensor = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorplanListPage');
  }
  addSensorplan(sensor: Sensor){
    console.log('SensorplanList.addSensorplan:',sensor);
    this.navCtrl.push(SensorplanAddPage, sensor);
  }

} // class
