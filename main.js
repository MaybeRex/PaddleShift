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
    setTimeout(
        initLED,
        config.timeout
    );
}

function initLED(){
    IK888.outputs[7] = 1;
}

/**
 * [paddleListener description]
 * @param  {[type]} changes [description]
 * @return {[type]}         [description]
 */
function paddleListener(changes){
    if( IK888.inputs[config.UP] === 1
        && IK888.inputs[config.DOWN] === 0
        && IK888.inputs[config.OVERRIDE] === 0
        && shifting == false
    ){
        IK888.outputs[7] = 0;
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
    if( IK888.inputs[config.UP] === 0
        && IK888.inputs[config.DOWN] === 1
        && IK888.inputs[config.OVERRIDE] === 0
        && shifting == false
    ){
        IK888.outputs[7] = 0;
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

    if( IK888.inputs[config.OVERRIDE] === 1){
        IK888.outputs[7] = 0;
        shifting = true;
        relays.outputs[config.DOWN] = 1;
        setTimeout(
            shiftDown.bind(this, 0),
            config.timeout
        );
        setTimeout(
            clearShift,
            config.timeout*2
        );
    }

    if( IK888.inputs[config.OVERRIDE] === 1
    ){
        relays.outputs[config.OVERRIDE] = 1;
    }else{
        relays.outputs[config.OVERRIDE] = 0;
    }
}

/**
 * [dataHandler description]
 * @param  {[type]} changes [description]
 * @return {[type]}         [description]
 */
function dataHandler(changes){
 // do this later
}

/**
 * [clearShift description]
 * @return {[type]} [description]
 */
function clearShift(){
    IK888.outputs[7] = 1;
    shifting = false;
}

/**
 * [shiftUp description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function shiftUp(state){
    relays.outputs[config.UP] = state;
}

/**
 * [shiftDown description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function shiftDown(state){
    relays.outputs[config.DOWN] = state;
}

/**
 * [shiftClutch description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function shiftClutch(state){
    relays.outputs[config.CLUTCH] = state;
}

init();
