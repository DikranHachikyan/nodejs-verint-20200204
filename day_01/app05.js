process.on('SIGINT', ()=>{
    process.stdout.write('Ctrl+C not permitted')
});

process.on('SIGHUP', ()=>{
    process.stdout.write('Reload Config File');
});

setInterval(()=>{
    process.stdout.write('...o...');
},2000);

console.log(`PID:${process.pid}`);