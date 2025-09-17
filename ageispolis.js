// "Ageispolis"
// song @by Aphex Twin
// script @by Anathonic
setcpm(102/4)

const synth = note(`<
[c6 ~ a#5 ~ g#5 ~ a#5 c6 ~ f5 ~ f5 ~ f5 g#5 a#5 ~ a#5 g#5 ~ a#5 ~ g#5 ~ a#5 g#5 f5 d#5 ~ f5 d#5 f5 ~ ~ ]
[f4 ~ g#4 a#4 c5 ~ c5 a#4 c5 ~ a#4 ~ c5 a#4 ~ c5 ~ ~ c5 ~ d#5 ~ f5 d#5 c5 ~ d#5 ~ c5 d5 ~ ~] 
[f5 ~ f5 ~ g5 ~ g#5 f5 g#5 ~ a#5 ~ a#5 g#5 ~ f5 ~ ~ a#4 ~ c5 ~ d#5 ~ f5 ~ ~ ~ ~ ~ ]
[f5 d#5 d#5 f5 ~ ~ ~ ~ c5 ~ c5 ~ d#5 ~ ~ ~ ~ f4 ~ g#4 ~ a#4 ~ c5 c4 c4 ~ c4 d#4 f4 ~]
>*4`).sound("gm_synth_choir").slow(8).gain(0.7).room(2)

const drums = sound("bd ~ ~ bd ~ ~ bd ~ ~ ~ oh ~ hh ~ ~ ~ ~ ").gain(0.8)
.bank("ace").room(0.2)

const pad = note(`< [b3] ~ [d3] ~ >`).sound("gm_fx_soundtrack").duration(2).gain(0.8)

const green = "#5FB147"
stack(
  arrange([16, drums]),
  arrange([16, synth]),
  arrange([16,pad])
).color(green)._pianoroll()
