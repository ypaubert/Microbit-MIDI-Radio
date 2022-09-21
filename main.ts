function Arrêter_la_note_par_radio (canalmidi: number, notemidi: number, grouperadio: number) {
    radio.setGroup(grouperadio)
    radio.sendNumber(1000 * canalmidi + notemidi)
}
input.onButtonPressed(Button.A, function () {
    Arrêter_la_note_par_radio(1, 36, 1)
    Jouer_la_note_par_radio(1, 1, 1)
})
function Jouer_la_note_par_radio (canalmidi: number, notemidi: number, grouperadio: number) {
    radio.setGroup(grouperadio)
    radio.sendNumber(1000 * canalmidi + notemidi)
}
input.onGesture(Gesture.ThreeG, function () {
    Arrêter_la_note_par_radio(1, 36, 1)
})
basic.forever(function () {
    if (input.lightLevel() == 0) {
        Arrêter_la_note_par_radio(1, 36, 1)
    }
})
