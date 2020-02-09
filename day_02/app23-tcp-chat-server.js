const {createServer} = require('net');

const options = {
    host: '127.0.0.1', //localhost
    port: 3000,
};

const sockets = [];

const server = createServer()

server.listen(options, ()=>{
    process.stdout.write(`\nListen on ${options.host}:${options.port}\n`);
});

server.on('connection', (socket)=>{
    const {remoteAddress,remotePort} = socket;
    process.stdout.write(`\nConnection from ${remoteAddress}:${remotePort}\n`);

    sockets.push(socket);

    socket.once('data',(buffer)=>{
        const username = buffer.toString('utf8');
        socket.username = username;

        socket.write(`active users ${sockets.length}`);
        sendMessage(socket, `${username} joined the chat!`);

        socket.on('data', (buffer)=>{
            process.stdout.write(`\nData:${buffer.length} Bytes\n`);
            const text = buffer.toString('utf8');
            sendMessage(socket, `${username} says:${text}`)
        });

    });

    socket.on('end', ()=>{
        const {username} = socket;
        sockets.splice(sockets.indexOf(socket),1);
        sendMessage(socket,`\n${username} left the chat (${sockets.length})\n`);
        process.stdout.write(`\n${username} left the chat (${sockets.length})\n`);
    });
    
    socket.on('close',()=>{
        process.stdout.write(`\nConnection closed\n`);
    });

});


const sendMessage = (sender, message)=>{
    sockets.forEach((socket)=>{
        if( socket === sender) return;
        socket.write(message);
    });
};