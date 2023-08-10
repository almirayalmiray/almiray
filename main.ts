input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 25) {
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showLeds(`
            . . # . .
            . . # # #
            . . . . #
            . . . . #
            . . . # #
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
