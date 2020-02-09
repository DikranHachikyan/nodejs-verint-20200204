const {createServer} = require('net');


const server = createServer((socket)=>{
    const {remoteAddress,remotePort} = socket;

    process.stdout.write(`\nConnection from ${remoteAddress}:${remotePort}\n`);

    socket.on('data', (buffer)=>{
        process.stdout.write(`\nData:${buffer.length} Bytes\n`);
        const text = buffer.toString('utf8');
        if( text.indexOf('quit') === 0 ){
            socket.end();
            return;
        }
        socket.write(buffer);
    });

    socket.on('end', ()=>{
        process.stdout.write(`\n${remoteAddress}:${remotePort} disconnected\n`);
    });
    
    socket.on('close',()=>{
        process.stdout.write(`\nConnection closed\n`);
    });

});

const options = {
    host: '127.0.0.1', //localhost
    port: 3000,
};

server.listen(options, ()=>{
    process.stdout.write(`\nListen on ${options.host}:${options.port}\n`);
});
