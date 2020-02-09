const {createSocket} = require('dgram');

const updServer = createSocket('udp4');

updServer.on('message', (message,remote)=>{
    const {address,port} = remote;
    const text = message.toString('utf8');
    console.log(text);
    updServer.send(message, 0, message.length, port,address);
});

updServer.bind(3001);