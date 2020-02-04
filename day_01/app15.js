const {open,stat,read} = require('fs');
const filename = './data/lorem.txt';

open(filename,'r', (err,fd)=>{
    console.log(`fd:${fd}`);

    stat(filename, (err,stats)=>{
        console.log('stats:%j',stats);
        const buffer = Buffer.alloc(stats.size);
        read(fd,buffer,0,buffer.length,null,(err,bytesRead,buffer)=>{
            const data = buffer.toString('utf8');
            console.log(`Read: ${bytesRead} Bytes`);
            // console.log(buffer);
            console.log(data);
        });
    });
});


