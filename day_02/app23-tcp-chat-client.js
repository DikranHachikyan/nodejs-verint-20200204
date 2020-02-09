const {Socket} = require('net');
const {createInterface} = require('readline');

const readline = createInterface(process.stdin,process.stdout);
const client = Socket();

const options = {
    host: '127.0.0.1',
    port: 3000,
};

readline.question('User Name:', (username)=>{  
    const {host,port} = options;
    readline.setPrompt('<<');

    client.connect(port,host, ()=>{
        client.write(username);
        readline.on('line',(line)=>{
            console.log(line);
            if( line === 'quit'){
                readline.close();
                client.end();
                return;
            }
            readline.prompt();
            client.write(line);
        }); //on line
    }); //connect
}); //question

client.on('data',(buffer)=>{
    process.stdout.write(`>>${buffer.toString('utf8')}`);
});

client.on('close', ()=>{
    process.stdout.write(`\nconnection closed\n`);
});


