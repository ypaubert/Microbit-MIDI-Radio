function Arrêter_la_note_par_radio (canalmidi: number, notemidi: number, grouperadio: number) {
    radio.setGroup(grouperadio)
    radio.sendNumber(1000 * canalmidi + notemidi)
}
function Jouer_la_note_par_radio (canalmidi: number, notemidi: number, grouperadio: number) {
    radio.setGroup(grouperadio)
    radio.sendNumber(1000 * canalmidi + notemidi)
}
