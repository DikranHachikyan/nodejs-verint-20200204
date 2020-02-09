const {createSocket} = require('dgram');

const udpClient = createSocket('udp4');

const options = {
    host:'127.0.0.1',
    port:3001,
};

process.stdin.on('data',(data)=>{
    const {host,port} = options;
    udpClient.send(data,0,data.length,port,host, (err,bytes)=>{
        if( err ) throw err;
        process.stdout.write(`\nUDP message sent to ${host}:${port}\n`);
    });
})

udpClient.on('message',(message,remote)=>{
    const {address,port} = remote;
    process.stdout.write(`${message.toString('utf8').slice(0,-1)} from ${address}:${port}\n`);
    udpClient.close();
});

udpClient.on('close',()=>{
    process.exit(0);
});
