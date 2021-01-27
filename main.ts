while (true) {
    if (input.rotation(Rotation.Pitch) > 2 && input.rotation(Rotation.Roll) > 2) {
        light.setAll(color.rgb(250, 100, 55))
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
