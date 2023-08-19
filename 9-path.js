const path = require('path');

console.log(path.sep)


const filepath = path.join('/contents','subfolder','test.txt')

console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolutepath = path.resolve(__dirname, 'contents', 'subfolder', 'text.txt')
console.log(absolutepath);