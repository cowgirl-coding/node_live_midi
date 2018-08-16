const R = require('ramda')
notes = [44,55,66,77]
let c = R.curry
let trans = (x, list) => list.map(d => d + x)
trans = c(trans)
octDn = trans(-12)
notes = octDn(notes)
trans(3, notes)
trans = x => list => list.map(d => d + x)
trans(12, notes)
trans = c(trans)
trans(12, notes)
trans = (amt, list) => list.map(d => d + amt)
trans = c(trans)
trans(12, notes)
let f = R.flatten
let replicate = (times, list) => list.map(R.flip(R.repeat(times)))
replicate = c(replicate)
rep4 = replicate(4)
rep4(notes)
replicate = (times, list) => list.map(R.flip(R.repeat)(times))
replicate = c(replicate)
rep4 = replicate(4)
rep4(notes)
notes = f(rep4(notes))
let arp = (scale, list) => list.map(l => scale.map(s => s + l))
arp = c(arp)
let min7 = [0,7,10,15]
m7 = arp(min7)
notes = [44, 66, 77, 99]
m7(f(rep4(notes)))
f(m7(f(rep4(notes))))
const midi = require('midi')
const output = new midi.output()
output.openPort(2)
note = x => output.sendMessage([144, x, 100])
let count = 0
let playing = false
notes
let rep = c(replicate)
let p = R.pipe
notes = p(f(m7), f(rep(4))(notes)
notes = p(f(m7), f(rep(4))(notes)
p(octDn)(notes)
p(octDn, trans(14))(notes)
p(trans(12), m7)(notes)
f
f([[1,2],[23,4]]
)
rep(8, notes)
f(rep(8))
f(m7(notes))
m7(f(notes))
f(m7(notes))
p(m7, rep(4))(notes)
notes
notes = f(p(m7, rep(4))(notes)
p(m7, rep(4)))(notes)
notes = f(p(m7, rep(4))(notes))
notes
notes = [40, 52, 42, 47]
f(
p(
  m7,
  rep(4)
  )
)
f(
p(
  m7, rep(4)(notes)))
f(p(m7, rep(4)(notes)))
f(p(m7, rep(4))(notes))
let sin = (len, range) => Array(len).map((d,i) => Math.PI * 2 / len * i * (R.max(range) - R.min(range)/2), + 64)  
sin(16, [30, 60])
sin = (len, range) => Array(len).map((d,i) => Math.sin(Math.PI * 2 / len * i * (R.max(range) - R.min(range)/2) + 64))  
sin(16, [30, 60])
sin = (len, range) => Array(len).fill(0).map((d,i) => Math.sin(Math.PI * 2 / len * i * (R.max(range) - R.min(range)/2) + 64))  
sin(16, [30, 60])
sin = (len, range) => Array(len).map((d,i) => Math.sin(Math.PI * 2 / len * i) * (R.max(range) - R.min(range)) + R.sum(range) / 2)
sin(16, [30, 60])
sin = (len, range) => Array(len).fill(0).map((d,i) => Math.sin(Math.PI * 2 / len * i) * (R.max(range) - R.min(range)) + R.sum(range) / 2)
sin(16, [30, 60])
R.min([30, 60])
sin = (len, range) => Array(len).fill(0).map((d,i) => Math.sin(Math.PI * 2 / len * i) * (range[0] - range[1]) + (range[0] + range[1]) / 2)
sin(16, [30, 60])
