//Shifter for 2015-2016 FSAE
//Mario Solorzano

#include <stdio.h>
#include <phidget21.h>
#include <unistd.h>

static int const milliseconds = 70;
int shifting = 0;

int attatchHandler(CPhidgetHandle phid, void * userPtr){
    char * name;
    CPhidget_getDeviceName(phid, &name);
    printf("Attached this! --> %s\n", name);
    return 0;
}

int detachHandler(CPhidgetHandle phid, void * userPtr){
    char * name;
    CPhidget_getDeviceName(phid, &name);
    printf("Detached this! --> %s\n", name);
    return 0;
}

int errorHandler(CPhidgetHandle phid, void * userPtr, int errCode, const char * unk){
    printf("Error!. %d - %s\n", errCode, unk);
    return 0;
}

int inputHandler(CPhidgetInterfaceKitHandle ik888, CPhidgetInterfaceKitHandle relays, int index, int state){
    if(shifting == 1 || state == 0){
        return 0;
    }

    switch (index) {
        case 0:
            shifting = 1;
            printf("Senses input number 1!\n");
            CPhidgetInterfaceKit_setOutputState(relays, 0, PTRUE);
            usleep(milliseconds * 1000);
            CPhidgetInterfaceKit_setOutputState(relays, 0, PFALSE);
            usleep(milliseconds * 1000);
            shifting = 0;
            break;
        case 1:
            shifting = 1;
            printf("Senses input number 1!\n");
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

    printf("Beginning Shift Sequence...\n");

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
    printf("Attatching IK888... (Dont forget sudo!)\n");
    CPhidget_open(
        (CPhidgetHandle)ik888,
        275950
    );
    //Relay Board
    printf("Attatching Relays... (Dont forget sudo!)\n");
    CPhidget_open(
        (CPhidgetHandle)relays,
        261867
    );



    if((ikResult = CPhidget_waitForAttachment((CPhidgetHandle)ik888, 10000))){
        CPhidget_getErrorDescription(ikResult, &err);
        printf("Problem waiting for attachment: %s\n", err);
        return;
    }

    if((ikResult = CPhidget_waitForAttachment((CPhidgetHandle)relays, 10000))){
        CPhidget_getErrorDescription(relayResult, &err);
        printf("Problem waiting for attachment: %s\n", err);
        return;
    }

    CPhidgetInterfaceKit_setOutputState(ik888, 2, PTRUE);

    printf("Press any key to end\n");
    getchar();

    for (int i = 0; i < 8; i++) {
        CPhidgetInterfaceKit_setOutputState(ik888, i, PFALSE);
    }
    for (int i = 0; i < 4; i++) {
        CPhidgetInterfaceKit_setOutputState(relays, i, PFALSE);
    }

    printf("Closing...\n");

    CPhidget_close((CPhidgetHandle)ik888);
    CPhidget_delete((CPhidgetHandle)ik888);

    CPhidget_close((CPhidgetHandle)relays);
    CPhidget_delete((CPhidgetHandle)relays);

    return;
}

int main(){
    startPaddleShift();

    return 0;
}
