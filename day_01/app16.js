const {readFile} = require('fs');
const filename = './data/data.json';

readFile(filename,'utf8',(err,content)=>{
    const json = JSON.parse(content);
    console.log('%j',json);
});


