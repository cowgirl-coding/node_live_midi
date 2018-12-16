let depth = x => y => x * y
let offset = x => y => x + y
let sine = len => dep => off => Array(len).fill(0).map((d,i) => Math.sin(Math.PI * 2 * i / len)).map(depth(dep)).map(offset(off)) 
let square = len => dep => off => Array(len).fill(0).map((d,i) => i >= len / 2 ? 1 : 0).map(depth(dep)).map(offset(off))

