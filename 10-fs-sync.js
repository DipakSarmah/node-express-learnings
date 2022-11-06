const {readFileSync, writeFileSync} = require('fs');
const path = require('path')

// console.log(path.sep)
console.log('start: \n')
const first = readFileSync('./content/first.txt','utf8')
const second= readFileSync('./content/second.txt','utf8')

console.log(first,'\n',second);

writeFileSync('./content/result-sync.txt',
`here is the result : ${first} , ${second}`,
{flag: 'a'}
)
console.log('end with this task\n')
console.log('starting the next one')

