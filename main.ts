radio.onReceivedValue(function (name, value) {
    if ("x" == name) {
        x = value / 4
    }
    if ("y" == name) {
        y = 0 - value / 4
    }
})
let x = 0
let y = 0
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # . # .
    . # . # .
    `)
y = 0
x = 0
radio.setGroup(6)
basic.forever(function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    x - y,
    robotbit.Motors.M2A,
    x + y
    )
})
