// "Ageispolis"
// song @by Aphex Twin
// script @by Anathonic
setcpm(102/4)

const synth = note(`<
[c6 ~ a#5 ~ g#5 ~ a#5 c6 ~ f5 ~ f5 ~ f5 g#5 a#5 ~ a#5 g#5 ~ a#5 ~ g#5 ~ a#5 g#5 f5 d#5 ~ f5 d#5 f5 ~ ]
[f4 ~ g#4 a#4 c5 ~ c5 a#4 c5 ~ a#4 ~ c5 a#4 ~ c5 ~ ~ c5 ~ d#5 ~ f5 d#5 c5 ~ d#5 ~ c5 d5 ~ ~] 
[f5 ~ f5 ~ g5 ~ g#5 f5 g#5 ~ a#5 ~ a#5 g#5 ~ f5 ~ ~ a#4 ~ c5 ~ d#5 ~ f5 ~ ~ ~ ~ ~ ]
[f5 d#5 d#5 f5 ~ ~ ~ ~ c5 ~ c5 ~ d#5 ~ ~ ~ ~ f4 ~ g#4 ~ a#4 ~ c5 c4 c4 ~ c4 d#4 f4 ~]>*4`)
  .sound("gm_synth_choir").slow(8).gain(0.9).room(2)

const drums1 = sound("bd ~ ~ bd ~ ~ bd ~ ~ ~ bd ~ ~ ~ ~").gain(0.5)
.bank("RolandTR909")

const drums2 = sound(
  "sn bd sn bd sn bd sn bd sn bd sn bd sn bd rd")
.gain(0.2)
.bank("RolandTR909")

const drums3 = sound(
  "~ ~ ~ ~ hh ~ ~ hh ~ ~ hh ~ ~ ~ hh")
.gain(0.2)
.bank("RolandTR909")

const green = "#5FB147"
stack(
  arrange([15, drums1]),
  arrange([16, synth]),
  arrange([15, drums2]),
  arrange([15, drums3]),
).color(green)._pianoroll()
