import { Dayplan } from '../sensor/dayplan.interface';
export interface Sensorplan {
    id: number;
    sensorid: number;
    name: string;
    frequency: string; //  allways, daily, weekly
    weekplan: Dayplan[]; // day, fromtime, totime, setpoint
}