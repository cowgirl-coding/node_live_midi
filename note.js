const R = require('ramda')

const NOTE = 'NOTE'

exports.arp = R.curry((chordName, note) => {
  const output = []
  for (let i = 0; i < chordName.length; i++) {
    harmony = note.value + chordName[i]
    output.push(Note(harmony))
    console.log('output: ', output)
  }
  return output
})

const Note = R.curry((dur, value) => ({
  value, 
  dur, 
  type: NOTE 
}))

exports.Note = Note

exports.sequence = R.curry((oct, seq) => {
  let value
  let output = []
  for (let i = 0; i < seq.length; i++) {
    value = 12 * oct + seq[i]
    output.push(Note(16, value))
  }
  return output
}) 

// apply a scale or sequence to a note, playing the entire sequence
// every within the time value of the original note.js
exports.squeeze = R.curry((scale, note) => {
  const output = []
  let value, duration
  for (let i = 0; i < scale.length; i++) {
    value = note.value + scale[i]
    duration = note.dur * scale.length
    output.push(Note(duration, value))
  }
  return output
})

exports.transpose = R.curry((amt, note) => ({
  ...note,
  value: note.value + amt,
}))
