// const exec = require('child_process').exec;
const {exec} = require('child_process');


const child = exec('nc -l 3000',
                   {cwd:'./',/*maxBuffer:1*/},
                   (err,stdout,stderr)=>{
                    console.log(`stdout:${stdout}`);
                    console.log(`stderr:${stderr}`);
                    if( err ){
                        console.log('ERROR:',err);
                    }
                });

