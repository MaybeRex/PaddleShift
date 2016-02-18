'use strict';

const InterfaceKit = require('phidgetapi').InterfaceKit;
const config = require('./configs/config.js');

let shifting = false;
const IK888 = new InterfaceKit;
const relays = new InterfaceKit;

relays.phidget.connect(
    {
        serial: config.relaySerial
    }
);


IK888.phidget.connect(
    {
        serial: config.IK888Serial
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
    IK888.observeInputs(paddleListener);
    IK888.observeRawSensors(dataHandler);
}


/**
 * [paddleListener description]
 * @param  {[type]} changes [description]
 * @return {[type]}         [description]
 */
function paddleListener(changes){
    if( IK888.inputs[config.UP] === 1 && IK888.inputs[config.DOWN] === 0 && shifting == false){
        shifting = true;
        relays.outputs[config.UP] = 1;
        setTimeout(
            shiftUp.bind(this, 0),
            config.timeout
        );
        setTimeout(
            clearShift,
            config.timeout*2
        );
    }
    if( IK888.inputs[config.UP] === 0 && IK888.inputs[config.DOWN] === 1 && shifting == false){
        shifting = true;
        relays.outputs[config.CLUTCH] = 1;
        setTimeout(
            shiftDown.bind(this, 1),
            config.timeout
        );
        setTimeout(
            shiftDown.bind(this, 0),
            config.timeout*2
        );
        setTimeout(
            shiftClutch.bind(this, 0),
            config.timeout*3
        );
        setTimeout(
            clearShift,
            config.timeout*4
        );
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

function clearShift(){
    shifting = false;
}

function shiftUp(state){
    relays.outputs[config.UP] = state;
}

function shiftDown(state){
    relays.outputs[config.DOWN] = state;
}

function shiftClutch(state){
    relays.outputs[config.CLUTCH] = state;
}

init();
