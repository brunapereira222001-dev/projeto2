function Descodificar () {
    basic.clearScreen()
    led.plot(primeiro - 1, segundo - 1)
}
let primeiro = 0
let segundo = 0
segundo = 0
primeiro = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 30) {
        primeiro = 1
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) >= 30 && pins.analogReadPin(AnalogReadWritePin.P1) < 80) {
        primeiro = 2
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) >= 80 && pins.analogReadPin(AnalogReadWritePin.P1) < 130) {
        primeiro = 3
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) >= 130 && pins.analogReadPin(AnalogReadWritePin.P1) < 160) {
        primeiro = 4
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) >= 160) {
        primeiro = 5
    }
    if (pins.analogReadPin(AnalogReadWritePin.P2) < 30) {
        segundo = 1
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) >= 30 && pins.analogReadPin(AnalogReadWritePin.P2) < 80) {
        segundo = 2
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) >= 80 && pins.analogReadPin(AnalogReadWritePin.P2) < 130) {
        segundo = 3
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) >= 130 && pins.analogReadPin(AnalogReadWritePin.P2) < 160) {
        segundo = 4
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) >= 160 && pins.analogReadPin(AnalogReadWritePin.P2) < 600) {
        segundo = 5
    } else {
        primeiro = 0
        segundo = 0
    }
    Descodificar()
})
