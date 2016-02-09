'use strict';

const InterfaceKit = require('phidgetapi').InterfaceKit;
const ShiftControls = require('./src/PaddleShifter.js');
const config = require('./configs/config.js');

let shifting = false;

const relays = new InterfaceKit;
relays.connect(
    {
        serial: '00000'
    }
);

const IK888 = new InterfaceKit;
IK888.connect(
    {
        serial: '0000000'
    }
);

/**
 * [init description]
 * @return {[type]} [description]
 */
function init(){
    relays.whenReady(initIK);
}

/**
 * [initIK description]
 * @return {[type]} [description]
 */
function initIK(){
    IK888.whenReady(beginShifter);
}

/**
 * [beginShifter description]
 * @return {[type]} [description]
 */
function beginShifter(){
    IK888.observeInputs(paddleListener);
    IK888.observeRawSensors(dataHandler);
}

/**
 * [paddleListener description]
 * @param  {[type]} changes [description]
 * @return {[type]}         [description]
 */
function paddleListener(changes){
    const shifter = new ShiftControls;
    if( IK888.inputs[config.UP] === 1 && IK888.inputs[config.DOWN] === 0 && shifting == false){
        shifting = true;
        shifter.shiftUp(resetFlag ,relays.outputs[config.UP]);
    }
    if( IK888.inputs[config.UP] === 0 && IK888.inputs[config.DOWN] === 1 && shifting == false){
        shifting = true;
        shifter.shiftDOwn(resetFlag ,relays.outputs[config.DOWN], relays.outputs[config.NEUTRAL]);
    }
}

/**
 * [resetFlag description]
 * @return {[tyoe]}     [description]
 */
function resetFlag(){
    shifting = false;
}

/**
 * [dataHandler description]
 * @param  {[type]} changes [description]
 * @return {[type]}         [description]
 */
function dataHandler(changes){
 // do this later
}

init();
