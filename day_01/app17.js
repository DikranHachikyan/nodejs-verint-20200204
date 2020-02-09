const {readdirSync,statSync} = require('fs');
const {join} = require('path');

const filename = './data/data.json';


const readDirs = (dir, level) =>{
    const files = readdirSync(dir);
    
    files.forEach( (filename)=>{
        const file = join(dir, filename);
        console.log(file);
        const stats = statSync(file);

        if( stats.isFile()){
            console.log(`${file} size:${stats.size} Bytes mode:${stats.mode}`);
        }
        else if ( stats.isDirectory()){
            console.log(`${' '.padStart(level * 2, ' ')} ${file}`);
            readDirs(file, level + 1);
        }
        
    });

}; //readDirs


readDirs('./', 0);
