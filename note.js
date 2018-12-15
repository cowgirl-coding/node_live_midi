const NOTE = 'NOTE'

const Note = (dur, value) => {
  return { value, dur, type: NOTE }
}

module.exports = R.curry(Note)

