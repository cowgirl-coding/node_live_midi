let concat = x => x.reduce((acc, val) => acc.concat(val))
let replicate = x => list => concat(list.map(item => Array(x).fill(item)))
let every = x => list => list.filter((d,i) => i % x === 0)
let intersperse = x => list => concat(list.map(l => [l, x]))

let arp = scale => list => concat(list.map(l => scale.map(s => s + l)))


