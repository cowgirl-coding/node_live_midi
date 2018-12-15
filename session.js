const { Session, Note } = require('./testSetup')
const { every, transpose, replicate: rep } = require('./List')
let s = new Session()
s.init()
s.play()
s.stop()
let n, a, b, c, d, e, f, g, x
let List = require('./List')
n = s.notes
maj7 = [0, 4, 7, 11]
const { cram, chord } = require('./List')
let R = require('ramda')
let { every2 } = List
n = s.notes

const Scales = require('./scales')
