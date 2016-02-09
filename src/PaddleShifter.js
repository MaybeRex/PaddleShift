'use strict';

const Errors = require('node-error-classes');

const TIMEOUT = 70;
/**
 * Paddle shifter CSUN FSAE
 * Mario Solorzano
 */
class PaddleShift{
    /**
     * Method constructor
     * @return {n/a} does not return
     */
    constructor(){
        Object.defineProperties(
            this,
            {
                shiftUp:{
                    enumerable: true,
                    writable: false,
                    value: shiftUp
                },
                shiftDown:{
                    enumerable: true,
                    writable: false,
                    value: shiftDown
                }
            }
        );
    }
}

/**
 * Paddle shift up
 * @param  {Function} callback callback
 * @param  {object} upRelay phidget relay
 * @return {n/a}         does not return
 */
function shiftUp(callback, upRelay){
    if(typeof(upRelay) == 'undefined'){
        const err = new Errors.RequiredParameter;
        err.setMessage(
            'upRelay'
        );
        throw err;
    }
    upRelay = 1;

    setTimeout(
        shift(upRelay, 0),
        TIMEOUT
    );
    setTimeout(
        callback(),
        TIMEOUT*2
    );
}

/**
 * Paddle shift down
 * @param  {Function} callback callback
 * @param  {object} downRelay    phidget relay
 * @param  {object} neutralRelay phidget relay
 * @return {n/a}              does not return
 */
function shiftDown(callback, downRelay, neutralRelay){
    if(typeof(downRelay) == 'undefined'){
        const err = new Errors.RequiredParameter;
        err.setMessage(
            'downRelay'
        );
        throw err;
    }
    if(typeof(neutralRelay) == 'undefined'){
        const err = new Errors.RequiredParameter;
        err.setMessage(
            'neutralRelay'
        );
        throw err;
    }
    neutralRelay = 1;
    setTimeout(
        shift(downRelay, 1),
        TIMEOUT
    );
    setTimeout(
        shift(downRelay, 0),
        TIMEOUT*2
    );
    setTimeout(
        shift(neutralRelay, 0),
        TIMEOUT*3
    );
    setTimeout(
        callback(),
        TIMEOUT*4
    );
}

/**
 * shift call for interval
 * @param  {object} relay phidget relay
 * @param  {number} state state of relay
 * @return {n/a}       does not return
 */
function shift(relay, state){
    relay = state;
}

module.exports = PaddleShift;
