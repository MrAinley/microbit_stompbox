let prevMillis = control.millis()
let buttonGate = 100
let minTime = 50
let pinVel = 0;
midi.useRawSerial()

basic.forever(function () {
    led.unplot(0, 0)
    // basic.showNumber(control.millis() - prevMillis)
    pinVel = pins.analogReadPin(AnalogPin.P0)
    if (pinVel > buttonGate && control.millis() - prevMillis >= minTime) {
        myThis.setVelocity(Math.map(pinVel, 0, 1024, 1, 127))
        midi.playDrum(DrumSound.AcousticBassDrum)
        led.plot(0, 0)
    }
    prevMillis = control.millis()
})
