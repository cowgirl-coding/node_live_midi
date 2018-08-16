const midi = require('midi')
let output = new midi.output()
output.openPort(1)
output.sendMessage([144, 64, 100])
let note = x => output.sendMessage([144, x, 100])
note(64)
note = [40, 52, 47, 42]
let count = 0
let playing = false
let tempo = 200
step = () => { if (playing) { note(notes[count % notes.length]); count++; setTimeout(step, tempo) }}
notes = [40, 52, 47, 42]
note = x => output.sendMessage([144, x, 100])
let play = () => { playing = true; step() }
let stop = () => playing = false
play()
stop()
play()
let trans = semi => note => note += semi
notes
notes = notes.map(trans(3))
let octUp = trans(12)
let octDn = trans(-12)
notes = notes.map(octUp)
notes = notes.map(octUp)
notes = notes.map(octDn)
notes = notes.map(octDn)
notes = notes.map(octDn)
let quintal = x => x.reduce((acc, val) => acc.concat([val, val + 7, val + 14]), [])
notes = quintal(notes)
notes = quintal(notes)
let odds = x => x.filter((d, i) => i % 2 !==0)
notes = odds(notes)
notes = odds(notes)
notes = odds(notes)
let cutoff = x => output.sendMessage([176, 74, x])
cutoff(30)
cutoff(50)
cutoff(20)
tempo = 50
tempo = 122
mods = [30, 40, 50, 20]
step = () => { if (playing) { note(notes[count % notes.length]); cutoff(mods[count % mods.length]); count++; setTimeout(step, tempo) }}
mods = mods.map(octUp)
mods = mods.map(octUp)
mods = mods.map(octUp)
mods = quintal(mods)
let = arp => semis => notes => notes.reduce((acc, val) => acc.concat(semis.map(semi => semi + val)), [])
let arp = semis => notes => notes.reduce((acc, val) => acc.concat(semis.map(semi => semi + val)), [])
notes = arp([0, 4, 7, 11, 14])(notes)
stop()
