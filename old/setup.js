let midi = require('midi')
let output = new midi.output()
output.openPort(1)
let notes = [40, 52, 42, 47]
let mods = [50, 70, 40, 60]
let note = x => output.sendMessage([144, x, 100])
let cutoff = x => output.sendMessage([176, 74, x])
let playing = false
let count = 0
let tempo = 200
let step = () => { if (playing) { note(notes[count % notes.length]); cutoff(mods[count % mods.length]); count++; setTimeout(step, tempo) }}
let play = () => { playing = true; step() }
let stop = () => { playing = false; }
