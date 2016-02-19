#!/bin/sh

### BEGIN INIT INFO
# Provides:          PaddleShiftControls
# Required-Start:    $network $remote_fs
# Required-Stop:     $network $remote_fs
# Should-Start:      avahi
# Should-Stop:       avahi
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: PaddleShiftControls
# Description:       Service that starts controls for paddle shifter
### END INIT INFO

DESC="PaddleShiftControls"

start() {
    forever start /root/git/PaddleShift/main.js
}

start
