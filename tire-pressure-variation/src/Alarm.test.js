import Alarm from "./Alarm";

function sensor(...pressureValue) {
  return {
    popNextPressurePsiValue(){
        return pressureValue.shift();
      } 
    }
  }


test("alarm activates when sensor value is below pressure threshold 17", () => {
  let logMessage = "";

  const logger = {  
    log(message) {
      logMessage = message;
    }
  }

  const alarm = new Alarm(sensor(16), logger);
  alarm.check();

  expect(logMessage).toEqual("Alarm activated!");
});

test("alarm doesn't activate when sensor value is inside threshold values", () => {
  let logMessage = "";

  const logger = {  
    log(message) {
      logMessage = message;
    }
  }

  const alarm = new Alarm(sensor(19), logger);
  alarm.check();

  expect(logMessage).toEqual("");
});

test("alarm activates when sensor value is over 21", () => {
  let logMessage = "";

  const logger = {  
    log(message) {
      logMessage = message;
    }
  }

  const alarm = new Alarm(sensor(22), logger);
  alarm.check();

  expect(logMessage).toEqual("Alarm activated!");
});

test("alarm deactivates", () => {
  let logMessage = "";

  const logger = {  
    log(message) {
      logMessage = message;
    }
  }

  const alarm = new Alarm(sensor(15, 18), logger);
  alarm.check();
  
  alarm.check();

  expect(logMessage).toEqual("Alarm deactivated!");
});