const R = require('ramda')

const NOTE = 'NOTE'

exports.arp = R.curry((chordName, note) => {
  const output = []
  for (let i = 0; i < chordName.length; i++) {
    harmony = note.value + chordName[i]
    output.push(Note(note.dur, harmony))
  }
  return output
})

exports.binaryInterval = R.curry((bin, interval, fn, arr) => {
  let output = []
  let binArray = bin.split('')
  let elapsed = 1 / interval
  let bitCount = 0
  let activeBit
  let progress
  for (let i = 0; i < binArray.length; i++) {
    binArray[i] = parseInt(binArray[i])
  }
  for (let i = 0; i < arr.length; i++) {
    progress = elapsed % (1 / interval)
    if (progress === 0) {
      activeBit = bitCount % binArray.length
      if (binArray[activeBit]) {
        output.push(fn(arr[i]))
      }
      else {
        output.push(arr[i])
      }
      elapsed = 1 / arr[i].dur
      bitCount++
    }
    else {
      output.push(arr[i])
      elapsed += 1 / arr[i].dur
    }
  }
  return R.flatten(output)
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

exports.everyInterval = R.curry((interval, fn, arr) => {
  let elapsed = 1 / interval
  let note
  let output = []
  for (let i = 0; i < arr.length; i++) {
    note = arr[i]
    if (elapsed % (1 / interval) === 0) {
      output.push(fn(note))
      elapsed = 1 / note.dur
    }
    else {
      output.push(note)
      elapsed += 1 / note.dur
    }
  } 
  return R.flatten(output)
})

// apply a scale or sequence to a note, playing the entire sequence
// every within the time value of the original note.js
exports.squeeze = R.curry((scale, note) => {
  const mode = typeof scale
  const output = []
  let value, duration
  if (mode === 'object') {
    duration = note.dur * scale.length
    for (let i = 0; i < scale.length; i++) {
      value = note.value + scale[i]
      output.push(Note(duration, value))
    }
  }
  else if (mode === 'number') {
    duration = note.dur * scale
    for (let i = 0; i < scale; i++) {
      output.push(Note(duration, note.value))
    }
  }
  return output
})

exports.transpose = R.curry((amt, note) => ({
  ...note,
  value: note.value + amt,
}))
