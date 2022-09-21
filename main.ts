input.onButtonPressed(Button.A, function () {
    radio.sendNumber((1000 * canal + note) * -1)
})
input.onGesture(Gesture.ThreeG, function () {
    radio.sendNumber((1000 * canal + note) * -1)
    radio.sendNumber(1000 * canal + note)
})
let note = 0
let canal = 0
radio.setGroup(1)
canal = 1
basic.showNumber(canal)
note = 36
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (input.lightLevel() == 0) {
        radio.sendNumber((1000 * canal + note) * -1)
    }
})
