process.stdin.setEncoding('utf8');

process.stdin.on('data',(data)=>{
    if ( data === 'end\n'){
        process.exit(0);
    }
    process.stdout.write(`output:${data}`);
});