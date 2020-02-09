const {createServer} = require('http');

const server = createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <h1>Node JS</h1>
    </body>
    </html>`);
    res.end();
});

server.listen(3000, ()=>{
    console.log(`Listen on port ${server.address().address}:${server.address().port}\n`);
});