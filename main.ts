input.onGesture(Gesture.Shake, function () {
    sorteio = randint(0, 4)
    if (sorteio == 0) {
        basic.showString("Maria")
    } else if (sorteio == 1) {
        basic.showString("Victor")
    } else if (sorteio == 2) {
        basic.showString("Ana")
    } else if (sorteio == 3) {
        basic.showString("Lucas")
    } else {
        basic.showString("Helena")
    }
})
let sorteio = 0
basic.showString("Wizard")
