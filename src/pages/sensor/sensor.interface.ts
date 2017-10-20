import { Sensortype } from './sensortype.interface';
import { Dayplan } from './dayplan.interface';

export interface Sensor {
    id: number;
    sensortype:  Sensortype;
    uuid: string;
    name: string;
    isactive: boolean;
    setpoint: number;
    actualvalue: number;
    isdayplan: boolean;
    dayplans: Dayplan[];
    islog: boolean;
}