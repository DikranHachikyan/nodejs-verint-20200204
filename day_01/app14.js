const {readdir} = require('fs');

readdir('./',(err,files)=>{
    if(err) throw err;
    console.log(files);
});