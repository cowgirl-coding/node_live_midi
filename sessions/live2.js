const midi = require('midi')
const output = new midi.output
output.openPort(2)
output.sendMessage([144, 64, 100])
let note = x => output.sendMessage([144, x, 100])
note(44)
let notes = [44, 47, 46, 42]
notes.map((x, i) => setTimeout(() => note(x), i * 200))
notes.map((x, i) => setTimeout(() => note(x), i * 200))
notes.map((x, i) => setTimeout(() => note(x), i * 200))
let count = 0
let go
let play = () => { go = setTimeout(() => { note(notes[count % notes.length]); count++ }) }
let stop = clearInterval(go)
play()
play = () => { go = setTimeout(() => { note(notes[count % notes.length]); count++ }, tempo) }
let tempo = 200
play()
play = () => { go = setInterval(() => { note(notes[count % notes.length]); count++ }, tempo) }
play()
notes
notes[1] = 55
notes.push(38)
notes
notes.push(83, 29)
notes.pop()
notes.pop()
notes
stop
stop = () => clearInterval(go)
stop()
play()
stop()
play()
stop()
play = () => { go = setInterval(() => { notes[count % notes.length].map(note); count++ }, tempo) }
play()
play = () => { go = setInterval(() => { [notes[count % notes.length]].map(note); count++ }, tempo) }
play()
stop()
notes.reverse().map((tone, i) => setTimeout(() => note(tone), tempo / i) 
)
notes.reverse().map((tone, i) => setTimeout(() => note(tone), tempo / i) 

)
notes.reverse().map((tone, i) => setTimeout(() => note(tone), tempo / i) )
play = notes => notes.reverse().map((tone, i) => setTimeout(() => note(tone), tempo / i) )
go = setInterval(() => play(notes), tempo)
clearInterval(go)
tempo = 1000
go = setInterval(() => play(notes), tempo)
notes = notes.map(note => [note, note * 2])
notes = notes.reduce((acc, val) => acc.concat(val))
let flat = notes => notes.reduce((acc, val) => acc.concat(val))
notes = notes.map(note => [note, note -7])
notes = flat(notes)
