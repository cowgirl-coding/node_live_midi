const R = require('ramda')

const replicate = (times, value) => {
  const output = []
  for (i = 0; i < times; i++) {
    output.push(value)
  }
  return output
}

exports.replicate = R.curry(replicate)
