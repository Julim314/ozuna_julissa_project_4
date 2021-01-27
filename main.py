while True:
    if input.rotation(Rotation.PITCH) > 2 and input.rotation(Rotation.ROLL) > 2:
        light.set_all(color.rgb(250, 100, 55))
    else:
        light.set_all(light.rgb(0,0,0))