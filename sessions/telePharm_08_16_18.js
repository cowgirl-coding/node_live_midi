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

play()
stop()
note(64)
play()
stop()
play()
mods = [100, 50]
mods = [30]
let trans = x => y => x + y
notes = notes.map(trans(7))
let octUp = trans(12)
let octDn = trans(-12)
notes = notes.map(octDn)
let quintale = x => list => list.reduce((acc, val) => acc.concat([val, val + 7, val + 14])
, [])
notes = quintale(notes)
notes = [64, 40, 42, 44]
let sequence = seq => oct => seq.map(s => s + (12 * oct))
let crazy_train_notes = [0, 0, 7, 0, 8, 0, 7, 0, 5, 3, 2, 3, 5, 3, 2, -2]
let batcave_notes = [3, -5, 0, -5, 3, -5, 0, -5, 3, -5, 0, -5, 3, -4, 0, -4]

const batcave = sequence(batcave_notes)
const crazy_train = sequence(crazy_train_notes)

notes = batcave(4)
notes = crazy_train(3)
let R = require('ramda')
let f = R.flatten
let replicate = x => list => f(list.map(l => scale.map(s => s + l)))
let replicate = x => list => f(list.map(l => Array(x).fill(l))
replicate = x => list => f(list.map(l => Array(x).fill(l)))
replicate(4)(notes)
notes = replicate(4)(notes)
tempo = 100
tempo = 50
tempo = 200
tempo /= 2
tempo = 10
tempo = 250
let every = x => list => list.filter((d,i) => i % x === 0)
notes = every(2)(notes)
let arp = scale => list => f(list.map(l => scale.map(s => s + l))) 
let maj7 = [0, 4, 7, 11]
let min7 = [0, 3, 7, 10]
let quintal = [0, 7, 14, 21]
let quartal = [0, 5, 10, 15]
let aeolian = [0, 2, 3, 5, 7, 8, 10]
let ionian = [0, 2, 4, 5, 7, 9, 11]

maj7arp = arp(maj7)
notes = maj7arp(notes)
tempo /= 2
notes = every(3)(notes)
mods = [70, 40, 30, 20, 120, 50, 70]
mods = mods.map(octDn)
mods = mods.map(octDn)
mods = mods.map(octDn)
mods = mods.map(octDn)
mods = mods.map(octDn)
let sine = (len, depth, offset) => Array(len).fill(0).map((d,i) => Math.sin(2 * Math.PI * i / len) * depth + offset)
mods = sine(32, 30, 60)
let square = (len, depth, offset) => Array(len).fill(0).map((d,i) => i >= len / 2 ? 1 : -1)
mods = square(16, 30, 60)
mods = square(8, 30, 60)
let p = R.pipe
notes = batcave(4)
mods = sine(16, 20, 70)
p(replicate(4), arp(quintal), every(3))(notes)
notes = p(replicate(4), arp(quintal), every(3))(notes)
tempo /= 1.5
