while (true) {
    if (input.acceleration(Dimension.X) > 2 && input.acceleration(Dimension.Y) > 2 && input.acceleration(Dimension.Z) > 2) {
        light.setAll(color.rgb(250, 100, 55))
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
