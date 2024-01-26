input.onPinReleased(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 200) {
        basic.showIcon(IconNames.Angry)
        JoyPiAdvanced.oledShowString("Ciao")
    }
})
