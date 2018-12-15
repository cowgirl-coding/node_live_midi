const R = require('ramda')
const { Note } = require('./testSetup')

const replicate = (times, value) => {
  const output = []
  for (let i = 0; i < times; i++) {
    output.push(value)
  }
  return output
}

const broadcast = (fn, arr) => 
  R.flatten(arr.map(fn))

const every = (num, fn, arr) => {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    if (i % num === 0) {
      const newValue = fn(arr[i])
      output.push(newValue)
    }
    else {
      output.push(arr[i])
    }
  }
  return R.flatten(output)
}

const every2 = (num, fn, arr) => R.flatten(
  arr.map((d, i) => i % num === 0 ? fn(d) : d)
)

// FIXME binary returns an empty array if given a number
// and also toString only returns the smallest number of bits
// to represent number
const binary = (byte, fn, arr) => {
  let binArray
  let output = []
  let binIndex, activeBit
  if (typeof byte === 'object') {
    binArray = byte
  }
  else if (typeof byte === 'number') {
    binArray = byte.toString(2).split('')
  }
  else if (typeof byte === 'string') {
    binArray = byte.split('')
    for (let i = 0; i < binArray.length; i++) {
      binArray[i] = parseInt(binArray[i])
    }
  }
  else {
    throw 'WTF did you do?'
  }
  for (let i = 0; i < arr.length; i++) {
    binIndex = i % binArray.length
    activeBit = binArray[binIndex]
    if (activeBit === 0) {
      output.push(arr[i])
    }
    else if (activeBit === 1) {
      output.push(fn(arr[i]))
    }
  }

  return R.flatten(output)
}

module.exports = {
  binary: R.curry(binary),
  broadcast: R.curry(broadcast),
  every: R.curry(every),
  every2: R.curry(every2),
  replicate: R.curry(replicate),
}
