export interface Dayplan {
    day: string;
    fromtime: string;
    totime: string;
    setpoint: number;
    offset?: number;
    offsetrandom?: number;
}