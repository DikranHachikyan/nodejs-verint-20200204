const {createReadStream} = require('fs');

const options = {
    highWaterMark:500,
    encoding:'utf8',
};

const readStream = createReadStream('./lorem.txt', options);

let counter = 0;

readStream.on('data', (data)=>{
    process.stdout.write(`\n-- data:${data.length} Bytes`);
    counter += data.length;
    
    if( counter === 2500){
        readStream.pause();
        process.stdout.write(`\n--- Paused for 2s --- \n`);
        setTimeout(()=>{
            readStream.resume();
        },2000);

    }
});

readStream.on('end',()=>{
    process.stdout.write(`\n----Reading Finished----\n`);
});