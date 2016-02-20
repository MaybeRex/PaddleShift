# Paddle Shift
#### 2015-2016 CSUN FSAE Shifting Logic

In this repository you will find all the code required to control the shifting logic for the 2015-2016 CSUN Formula SAE car. The car featured pneumatic cylinders to control both clutching and shifting actions. This logic was created to automate the shifting process as follows:

* **Upshift** - Only the shift cylinder is actuated. The ignition cut is a function of ECU.
* **Downshift** - Clutch cylinder is actuated to pull the clutch in, shift cylinder is actuated to execute the shift, and clutch is let back out.
* **E-clutch** - When the E-clutch is engaged, the shifter functions without automation.

The system uses a Raspberry Pi 2 Model B running a Linux shell script to start the program on boot up. The high level code flow is as follows:
1. The program connects and initializes both the I/O and relay board.
2. It listens for inputs from the I/O board. Those inputs can be upshift, downshift, or E-clutch buttons.
3. Depending on the input, the corresponding shifting function is called.
4. The function tells the relay board to execute its respective shift function.

***Note*** : Auto blipping was not a functionality on this car. The driver is relied upon to rev match during down shifting.
___

## Code Walkthrough

This documentation will provide a line-by-line walkthrough of the code in this repository. We'll begin by taking a look at config.js:

```javascript
'use strict';

const shifterConfig = {
    UP: 0,
    DOWN: 1,
    CLUTCH: 2,
    OVERRIDE: 3,
    relaySerial: 261867,
    IK888Serial: 275950,
    timeout: 70
};

module.exports = shifterConfig;
```

The expression `'use strict';` indicates that the code will run in strict mode. This means the code will throw errors for undeclared variables and bad syntax.

```javascript
const shifterConfig = {
  ...
}
```

This block of code is creating an object that will house all of the initial variables used in main.js. **It is important to note that the timeout variable controls the time interval between each of the relay switches**. Tweaking this value will affect how quickly the downshift cycle happens. Testing has indicated that 70ms is the shortest interval that can be used without inducing system unreliability. Any value shorter than this causes the relays to spasm when pressed repeatedly.

```javascript
module.exports = shifterConfig;
```
module.exports will export the shifterConfig object -- along with all the variables contained in it -- to whatever should require config.js.
