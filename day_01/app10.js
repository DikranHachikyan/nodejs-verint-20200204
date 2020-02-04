// const exec = require('child_process').exec;
const {fork} = require('child_process');
const children = [];

console.log(`Main process:${process.pid}`);

for(let i = 1; i <=3; i++){
    const child = fork('./children/child1.js',[i, 100* i]);
    child.on('message',(data)=>{
        // console.log(`from child:${data}`)
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`Child:${data.pid} done:${data.done}`);
        if( data.done === 100){
            child.send('quit');
        }
    });
    children.push(child);
}
