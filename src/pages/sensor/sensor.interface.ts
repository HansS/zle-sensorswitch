import { Dayplan } from '../sensorplan-add/dayplan.interface';

export interface Sensor {
    id: number;
    uuid: string;
    name: string;
    typedisplay: string;
    type: string;
    unit: string;
    setpoint: number;
    actualvalue: number;
    settype: string;
    islog: boolean;
    planexpanded: boolean;
    dayplans: Dayplan[];
}