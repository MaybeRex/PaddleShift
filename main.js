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
        shiftUp();
    }
    if( IK888.inputs[config.UP] === 0
        && IK888.inputs[config.DOWN] === 1
        && IK888.inputs[config.OVERRIDE] === 0
        && shifting == false
    ){
        shiftDown();
    }
    if( IK888.inputs[config.UP] === 0
        && IK888.inputs[config.DOWN] === 1
        && IK888.inputs[config.OVERRIDE] === 1
        && shifting == false
    ){
        eShiftDown();
    }

    if( IK888.inputs[config.OVERRIDE] === 1
    ){
        relays.outputs[config.CLUTCH] = 1;
    }
    if(
        IK888.inputs[config.UP] === 0
            && IK888.inputs[config.DOWN] === 0
            && IK888.inputs[config.OVERRIDE] === 0
            && shifting == false
    ){
        relays.outputs[config.CLUTCH] = 0;
        clearShift();
    }
}

/**
 * [eShiftDown description]
 * @return {[type]} [description]
 */
function eShiftDown(){
    IK888.outputs[7] = 0;
    shifting = true;
    relays.outputs[config.DOWN] = 1;
    setTimeout(
        shiftDownRelay.bind(this, 0),
        config.timeout
    );
    setTimeout(
        clearShift,
        config.timeout*2
    );
}

/**
 * [shiftUp description]
 * @return {[type]} [description]
 */
function shiftUp(){
    IK888.outputs[7] = 0;
    shifting = true;
    relays.outputs[config.UP] = 1;
    setTimeout(
        shiftUpRelay.bind(this, 0),
        config.timeout
    );
    setTimeout(
        clearShift,
        config.timeout*2
    );
}

/**
 * [shiftDown description]
 * @return {[type]} [description]
 */
function shiftDown(){
    IK888.outputs[7] = 0;
    shifting = true;
    relays.outputs[config.CLUTCH] = 1;
    setTimeout(
        shiftDownRelay.bind(this, 1),
        config.timeout
    );
    setTimeout(
        shiftDownRelay.bind(this, 0),
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
 * [shiftUpRelay description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function shiftUpRelay(state){
    relays.outputs[config.UP] = state;
}

/**
 * [shiftDownRelay description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
function shiftDownRelay(state){
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
