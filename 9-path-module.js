const path = require('path');

console.log(path.sep);//provides the platform sepecific path segment separator

const filePath = path.join('\content','subcontent','test.txt');

console.log(filePath);

const base = path.basename(filePath)

console.log(base);

console.log(__dirname)
const absolute = path.resolve(__dirname,'content','subcontent','test.txt');

console.log(absolute)

