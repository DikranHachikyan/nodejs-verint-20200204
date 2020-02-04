// console.log(process.argv);

let   progress = process.argv[2],
      time = process.argv[3],
      sym  = progress;

const interval = setInterval(()=>{
    progress += sym;
    process.stdout.write(progress);
    process.send({
        pid: process.pid,
        done: Math.ceil(progress.length/20 * 100)
    });
    // console.log(progress.length);
    if ( progress.length >= 20){
        clearInterval(interval);
        // console.log('clear');
    }
},time);

process.on('message', (data)=>{
    if( data === 'quit'){
        process.exit(0);
    }
    // console.log(`from parent:${data}`)
});