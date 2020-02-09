const {createReadStream,createWriteStream} = require('fs');

const options = {
    highWaterMark:500,
    encoding:'utf8',
};

const readStream = createReadStream('./lorem.txt', options);
const writeStream = createWriteStream('./lorem-2.txt');

readStream.on('data',(data)=>{
    process.stdout.write(`\n-- data:${data.length} Bytes`);
});

readStream.on('end',()=>{
    process.stdout.write(`\n----Reading Finished ${readStream.bytesRead}----\n`);
});

writeStream.on('finish',()=>{
    process.stdout.write(`\n--- Writting Finished ${writeStream.bytesWritten} -----\n`);
});

writeStream.on('pipe',(src)=>{
    process.stdout.write('connected to pipe');
    console.log(src);
});

readStream.pipe(writeStream);

