import Sensor from "./Sensor";

var alarmOn = Symbol();

export default class Alarm {
  constructor(sensor = new Sensor(), logger = console) {
    this.lowPressureThreshold = 17;
    this.highPressureThreshold = 21;
    this.sensor = sensor;
    this.logger = logger;
    this[alarmOn] = false;
  }

  check() {
    const psiPressureValue = this.sensor.popNextPressurePsiValue();

    if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
      if(!this[alarmOn]) {
        this[alarmOn] = true;
        this.logger.log("Alarm activated!");
      }
    } else {
      if(this[alarmOn]) {
        this[alarmOn] = false;
        this.logger.log("Alarm deactivated!");
      }
    }
  }
};

