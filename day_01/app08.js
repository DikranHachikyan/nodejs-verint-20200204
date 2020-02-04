// const exec = require('child_process').exec;
const {spawn} = require('child_process');


const nc = spawn('nc', ['-l', '3000']);

nc.stdout.on('data', (data)=>console.log(`stdout:${data}`));
nc.stdin.on('data', (data)=>console.log(`stdin:${data}`));

nc.on('close', (code)=>console.log(`exit code:${code}`));


