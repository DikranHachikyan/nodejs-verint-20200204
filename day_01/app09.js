// const exec = require('child_process').exec;
const {spawn} = require('child_process');

const ps = spawn('ps',['-ax']);
const grep = spawn('grep',['-P','apache']);

ps.stdout.on('data', (data)=>{
    grep.stdin.write(data);
});

ps.stderr.on('data',(data)=>{
    console.log(`ps stderr:${data}`);
});

ps.on('close',(code)=>{
    console.log(`ps exit code:${code}`);
    grep.stdin.end();//!!!
});

grep.stdout.on('data',(data)=>{
    console.log(`grep stdout:${data}`);
});

grep.stderr.on('data',(data)=>{
    console.log(`grep stderr:${data}`);
});

grep.on('close',(code)=>{
    console.log(`grep exit code:${code}`);
})


