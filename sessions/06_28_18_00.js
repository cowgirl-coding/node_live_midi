const midi = require('midi')
const output = new midi.output()
output.openPort(2)
output.sendMessage([144, 64, 100])
let note = x => output.sendMessage([144, x, 100])
note(64)
let count = 0
let tempo = 100
let playing = false
let step = () => { if (playing) { note(notes[count % notes.length]); count++; setTimeout(step, tempo); } }
let stop = () => playing = false
let start = () => { playing = true; step() }
let notes = [40, 52, 47, 42]
start()
tempo = 500
let replicate x => list => R.flatten(list.map(R.flip(R.repeat)(x))
let replicate = x => list => R.flatten(list.map(R.flip(R.repeat)(x))
)
let rep4 = replicate(4)
let rep8 = replicate(8)
const R = require('ramda')
notes = rep4(notes)
arp = scale => list => R.flatten(list.map(l => scale.map(s => s + l)))
let maj7 = [0,7,11,16]
let min7 = [0,7,10,15]
let m7arp = arp(min7)
notes = m7arp(notes)
tempo = 200
tempo *= 2
tempo /= 2
tempo /= 2
let quintal = arp([0, 7, 14])
notes = quintal(notes)
let every = x => list => list.filter((d,i) => i % x === 0)
notes = every(3)(notes)
notes = quintal(notes)
notes = every(4)(notes)
notes = replicate(3)(notes)
tempo -= 100
tempo += 100
tempo -= 50
notes = every(2)(notes)
tempo += 50
let M7arp = arp(maj7)
notes = M7arp(notes)
notes.reverse()
let quartal = arp([0,5,10,15])
notes = quartal(notes)
let sequence = seq => oct => seq.map(seq + (12 * oct))
sequence = seq => oct => seq.map(s => s + (12 * oct))
let dknightRider = sequence([0,0,0,0,3,2,-2,0])(3)
notes = dknightRider
tempo += 50
notes = dknightRider.map(d => d + 24)
notes = rep8(notes)
tempo -= 100
notes = arp(maj7)(notes)
notes = every(3)(notes)
notes = every(5)(notes)
notes = rep4(notes)
