// "Smalltown Boy"
// song @by Bronski Beat
// script @by Anathonic
setcpm(131/4)

const bass = note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
.sound("gm_synth_bass_1")
.lpf(800) 

const synth = n(`<
[~ 0] 2 [0 2] [~ 2]
[~ 0] 1 [0 1] [~ 1]
[~ 0] 3 [0 3] [~ 3]
[~ 0] 2 [0 2] [~ 2]
>*4`).scale("C4:minor")
.sound("gm_synth_strings_1")

const drums = sound("bd*4, [~ <sd cp>]*2, [~ hh]*4")
.bank("RolandTR909")

const green = "#5FB147"
stack(
  arrange([16, bass]),
  arrange([8, silence], [16, synth]),
  arrange([16, silence], [16, drums])
).color(green)._pianoroll()
