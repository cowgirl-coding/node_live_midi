const R = require('ramda')
const { Note } = require('./testSetup')

const replicate = (times, value) => {
  const output = []
  for (i = 0; i < times; i++) {
    output.push(value)
  }
  return output
}

const broadcast = (fn, arr) => 
  R.flatten(arr.map(fn))

const every = (num, fn, arr) => {
  const output = []
  for (i = 0; i < arr.length; i++) {
    if (i % num === 0) {
      const newValue = fn(arr[i])
      output.push(newValue)
    }
    else {
      output.push(arr[i])
    }
  }
  return output
}

const every2 = (num, fn, arr) => R.flatten(
  arr.map((d, i) => i % num === 0 ? fn(d) : d)
)

// Note functions
const transpose = (amt, note) => ({
  ...note,
  value: note.value + amt,
})

const chord = (chordName, note) => {
  const output = []
  for (i = 0; i < chordName.length; i++) {
    harmony = note.value + chordName[i]
    output.push(Note(harmony))
    console.log('output: ', output)
  }
  return output
}

const squeeze = (scale, note) => {
  const output = []
  for (i = 0; i < scale.length; i++) {
    value = note.value + scale[i]
    duration = note.dur * scale.length
    output.push(Note(value, duration))
  }
  return output
}

module.exports = {
  broadcast: R.curry(broadcast),
  chord: R.curry(chord),
  squeeze: R.curry(squeeze),
  every: R.curry(every),
  every2: R.curry(every2),
  replicate: R.curry(replicate),
  transpose: R.curry(transpose),
}
