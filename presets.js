let sequence = seq => oct => seq.map(s => s + (12 * oct))
let crazy_train_notes = [0, 0, 7, 0, 8, 0, 7, 0, 5, 3, 2, 3, 5, 3, 2, -2]
let batcave_notes = [3, -5, 0, -5, 3, -5, 0, -5, 3, -5, 0, -5, 3, -4, 0, -4]

const batcave = sequence(batcave_notes)
const crazy_train = sequence(crazy_train_notes)
