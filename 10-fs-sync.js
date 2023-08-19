const { readFileSync, writeFileSync } = require('fs')

console.log('start')

const first = readFileSync('./contents/first.txt', 'utf-8')

const second = readFileSync('./contents/second.txt', 'utf-8')
console.log(first, second)

writeFileSync('./contents/result-sync.txt', `here is the result ${first} and ${second}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one')
