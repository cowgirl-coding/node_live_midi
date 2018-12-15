const midi = require('midi')
const R = require('ramda')

const Note = require('./note')

const starterNotes = [
  44, 40, 52, 57
].map(Note(16))

function Session(portNum) {
  this.output = new midi.output()
  this.output.openPort(portNum)
  this.count = 0
  this.playing = false
  this.tempo = 200
  this.notes = starterNotes
  this.mods = [50, 70, 40, 60]
  this.bpm = 60
  console.log('Session Initialized!')

  this.setNotes =function(notes) {

    this.notes = R.flatten(notes)
  }

  this.note = function(x) {
    this.output.sendMessage([144, x, 100])
  }

  this.getTimeout = function(duration) {
    msPerMinute = 60 * 1000
    interval = msPerMinute / this.bpm
    return (interval / duration) * 4
  }

  this.step = function() {
    if (!this.playing) return
    const step = [this.count % this.notes.length]
    const { value, dur } = this.notes[step]
    this.note(value)
    this.timeout = setTimeout(() => this.step(), this.getTimeout(dur))
    this.count++
  }

  this.play = function() {
    this.playing = true
    this.step()
  }

  this.stop = function() {
    this.playing = false
    this.count = 0
  }
}

let cutoff = x => output.sendMessage([176, 74, x])

module.exports = {
  Session,
  Note: R.curry(Note),
}
