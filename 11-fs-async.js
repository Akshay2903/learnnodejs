
const { readFile, writeFile } = require('fs');


// look like callback hell

console.log('start');

readFile('./contents/first.txt','utf8',(err, data) => {
    if(err){
        console.log(err)
        return;
    } 
    const first = data;
    readFile('./contents/second.txt', 'utf8',(err, data) => {
        if(err){
            console.log(err)
            return;
        }
        const second = data
        writeFile('./contents/result-async.txt', `here is the new async file : ${first},${second}`, (err, data) => {
            if(err){
                console.log(err)
                return 
            }
            console.log('done with this task')
        })
    })
})

console.log('starting next task')