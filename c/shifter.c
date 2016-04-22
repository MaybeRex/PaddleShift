//Shifter for 2015-2016 FSAE
//Mario Solorzano

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <string.h>
#include <phidget21.h>

static int const milliseconds = 70;
int shifting = 0;

int attatchHandler(CPhidgetHandle phid, void * userPtr){
    char * name;
    CPhidget_getDeviceName(phid, &name);
    return 0;
}

int detachHandler(CPhidgetHandle phid, void * userPtr){
    char * name;
    CPhidget_getDeviceName(phid, &name);
    return 0;
}

int errorHandler(CPhidgetHandle phid, void * userPtr, int errCode, const char * unk){
    return 0;
}

int inputHandler(CPhidgetInterfaceKitHandle ik888, CPhidgetInterfaceKitHandle relays, int index, int state){
    if(shifting == 1 || state == 0){
        return 0;
    }

    switch (index) {
        case 0:
            shifting = 1;
            CPhidgetInterfaceKit_setOutputState(relays, 0, PTRUE);
            usleep(milliseconds * 1000);
            CPhidgetInterfaceKit_setOutputState(relays, 0, PFALSE);
            usleep(milliseconds * 1000);
            shifting = 0;
            break;
        case 1:
            shifting = 1;
            CPhidgetInterfaceKit_setOutputState(relays, 1, PTRUE);
            usleep(milliseconds * 1000);
            CPhidgetInterfaceKit_setOutputState(relays, 2, PTRUE);
            usleep(milliseconds * 1000);
            CPhidgetInterfaceKit_setOutputState(relays, 1, PFALSE);
            CPhidgetInterfaceKit_setOutputState(relays, 2, PFALSE);
            usleep(milliseconds * 1000);
            shifting = 0;
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            //nothing yet
            break;
        case 5:
            //nothing yet
            break;
        case 6:
            //nothing yet
            break;
        case 7:
            //nothing yet
            break;
    }

    CPhidgetInterfaceKit_setOutputState(
        relays,
        0,
        0
    );
    return 0;
}

int sensorHandler(CPhidgetInterfaceKitHandle relays, void * userPtr, int index, int value){

    return 0;
}

int ikOutputHandler(CPhidgetInterfaceKitHandle relays, void * userPtr, int index, int value){

    return 0;
}

int relayOutputHandler(CPhidgetInterfaceKitHandle relays, void * userPtr, int index, int value){

    return 0;
}

void startPaddleShift(){

    int ikResult;
    int relayResult;
    int i;
    const char * err;

    CPhidgetInterfaceKitHandle ik888;
    CPhidgetInterfaceKitHandle relays;

    CPhidgetInterfaceKit_create(&ik888);
    CPhidgetInterfaceKit_create(&relays);

    //attatch
    CPhidget_set_OnAttach_Handler(
        (CPhidgetHandle)ik888,
        attatchHandler,
        NULL
    );
    CPhidget_set_OnAttach_Handler(
        (CPhidgetHandle)relays,
        attatchHandler,
        NULL
    );

    //detach
    CPhidget_set_OnDetach_Handler(
        (CPhidgetHandle)ik888,
        detachHandler,
        NULL
    );
    CPhidget_set_OnDetach_Handler(
        (CPhidgetHandle)relays,
        detachHandler,
        NULL
    );

    //error
    CPhidget_set_OnError_Handler(
        (CPhidgetHandle)ik888,
        errorHandler,
        NULL
    );
    CPhidget_set_OnError_Handler(
        (CPhidgetHandle)relays,
        errorHandler,
        NULL
    );

    CPhidgetInterfaceKit_set_OnInputChange_Handler(
        ik888,
        inputHandler,
        relays
    );

    CPhidgetInterfaceKit_set_OnSensorChange_Handler(
        ik888,
        sensorHandler,
        NULL
    );

    CPhidgetInterfaceKit_set_OnOutputChange_Handler(
        ik888,
        ikOutputHandler,
        NULL
    );

    CPhidgetInterfaceKit_set_OnOutputChange_Handler(
        relays,
        relayOutputHandler,
        NULL
    );

    //open the interface kit and the relay board
    //Interface Kit
    CPhidget_open(
        (CPhidgetHandle)ik888,
        275950
    );
    //Relay Board
    CPhidget_open(
        (CPhidgetHandle)relays,
        261867
    );



    if((ikResult = CPhidget_waitForAttachment((CPhidgetHandle)ik888, 10000))){
        CPhidget_getErrorDescription(ikResult, &err);
        return;
    }

    if((ikResult = CPhidget_waitForAttachment((CPhidgetHandle)relays, 10000))){
        CPhidget_getErrorDescription(relayResult, &err);
        return;
    }

    CPhidgetInterfaceKit_setOutputState(ik888, 2, PTRUE);

    while (1){
        //Dont block context switches, let the process sleep for some time
        sleep(10);
    }

    return;
}

int main(int argc, char* argv[]){
    FILE * fp= NULL;
    pid_t process_id = 0;
    pid_t sid = 0;

    // Create child process
    process_id = fork();

    //error checks
    if (process_id < 0){
        printf("fork failed!\n");
        exit(1);
    }
    if (process_id > 0){
        printf("process_id of child process %d \n", process_id);
        exit(0);
    }

    //idk why ones needs this
    umask(0);

    //or this
    sid = setsid();
    if(sid < 0){
        exit(1);
    }

    //move to where its safe
    chdir("/");

    close(STDIN_FILENO);
    close(STDOUT_FILENO);
    close(STDERR_FILENO);

    startPaddleShift();

    fclose(fp);

    return 0;
}
