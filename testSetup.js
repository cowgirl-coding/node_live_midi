const midi = require('midi')
const R = require('ramda')

const NOTE = 'NOTE'

const Note = (value, dur = 16) => {
  return { value, dur, type: NOTE }
}

const starterNotes = [
  Note(40),
  Note(52),
  Note(42),
  Note(47),
]

function Session() {
  this.count = 0
  this.playing = false
  this.tempo = 200
  this.notes = starterNotes
  this.mods = [50, 70, 40, 60]
  this.bpm = 60

  this.init = function() {
    this.output = new midi.output()
    this.output.openPort(1)
    console.log('Initializing Session!')
  }

  this.setNotes =function(notes) {
    this.notes = notes
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

let notes = [40, 52, 42, 47]
let mods = [50, 70, 40, 60]
let note = x => output.sendMessage([144, x, 100])
let cutoff = x => output.sendMessage([176, 74, x])
let playing = false
let count = 0
let tempo = 200
let step = () => { if (playing) { note(notes[count % notes.length]); cutoff(mods[count % mods.length]); count++; setTimeout(step, tempo) }}
let play = () => { playing = true; step() }
let stop = () => { playing = false; }

module.exports = {
  Session,
  Note: R.curry(Note),
}
