const {createServer} = require('http');
const {createReadStream} = require('fs');
const {join} = require('path');
const root = 'public';

const server = createServer((req,res)=>{
    console.log(`${req.method} ${req.url}`);
    const {url} = req;
    if ( url === '/'){
        res.writeHead(200, {'content-type':'text/html'});
        createReadStream(`${root}/index.html`).pipe(res);
    }
    else if( url.match(/\.css$/) ){
        res.writeHead(200, {'content-type':'text/css'});
        createReadStream(join(root,url) ).pipe(res);
    }
    else if( url.match(/\.(jpg|png|gif|jpeg)$/) ){
        res.writeHead(200, {'content-type':'image/jpg'});
        createReadStream(join(root,url) ).pipe(res);
    }
    else{
        res.writeHead(404, {'content-type':'text/plain'});
        res.end('Content Not Found');
    }
});

server.listen(3000, ()=>{
    console.log(`Listen on port ${server.address().address}:${server.address().port}\n`);
});