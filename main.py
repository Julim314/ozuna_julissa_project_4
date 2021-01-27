while True:
    if input.acceleration(Dimension.X) > 2 and input.acceleration(Dimension.Y) > 2 and input.acceleration(Dimension.Z) > 2:        
        light.set_all(color.rgb(250, 100, 55))
    else:
        light.set_all(light.rgb(0,0,0))