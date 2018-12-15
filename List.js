const R = require('ramda')

const replicate = (times, notes) => {
  const output = []
  for (i = 0; i < notes.length; i++) {
    for (j = 0; j < times; j++) {
      output.push(notes[i])
    }
  }
  return output
}

exports.replicate = R.curry(replicate)

