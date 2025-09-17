// "Ageispolis"
// song @by Aphex Twin
// script @by Anathonic
setcpm(102/4)

const synth = note(`<
[c6 ~ a#5 ~ g#5 ~ a#5 c6 ~ f5 ~ f5 ~ f5 g#5 a#5 ~ a#5 g#5 ~ a#5 ~ g#5 ~ a#5 g#5 f5 d#5 ~ f5 d#5 f5 ~ ~ ]
[f4 ~ g#4 a#4 c5 ~ c5 a#4 c5 ~ a#4 ~ c5 a#4 ~ c5 ~ ~ c5 ~ d#5 ~ f5 d#5 c5 ~ d#5 ~ c5 d5 ~ ~] 
[f5 ~ f5 ~ g5 ~ g#5 f5 g#5 ~ a#5 ~ a#5 g#5 ~ f5 ~ ~ a#4 ~ c5 ~ d#5 ~ f5 ~ ~ ~ ~ ~ ]
[f5 d#5 d#5 f5 ~ ~ ~ ~ c5 ~ c5 ~ d#5 ~ ~ ~ ~ f4 ~ g#4 ~ a#4 ~ c5 c4 c4 ~ c4 d#4 f4 ~]
>*4`).sound("sqr").slow(8).room(5).gain(0.2)

const drums1 = sound("bd ~ ~ bd ~ ~ bd ~ ~ ~ oh ~ hh ~ ~ ~ ")
.bank("ace").room(0.2).distort(0.3).lpf(8000).gain(0.9)

const drums2 = sound(
  "sh tb sh tb sh tb sh tb sh tb sh tb sh tb sh tb sh")
  .gain(0.1).bank("d110")

const allDrums = stack(drums1, drums2)

const pad = note(`< [a3] ~ [d3] ~ >`).sound("gm_fx_soundtrack").duration(2).gain(0.6)

const green = "#5FB147"
stack(
  arrange([16, allDrums]),
  arrange([16, synth]),
  arrange([16,pad])
).color(green)._pianoroll()
