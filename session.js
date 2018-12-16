const R = require('ramda')
const { Session } = require('./testSetup')
const { 
  arp,
    Note, 
      sequence,
        squeeze,
        } = require('./note')
        const {
          binary,
            broadcast,
              every,
                every2,
                  replicate,
                  } = require('./List')
                  const Scales = require('./scales')
                  const Sequences = require('./sequences')
                  
const bc = broadcast
const rep = replicate
const f = R.flatten
const p = R.pipe
const ev = every
const seq5 = sequence(5)
const seq4 = sequence(4)

let s = new Session(1)
s.play()
s.notes
s.setNotes(seq5(Sequences.batcave))
s.stop()
s.play()
let x = s.notes
x
x = binary('00101010', squeeze(3), x)
x
s.setNotes(x)
let a = x
a
x
x = ev(8, squeeze(Scales.ionian), x)
s.setNotes(x)
x
s.setNotes(a)
