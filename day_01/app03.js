console.log(`PID:${process.pid}`);
console.log(`exec path:${process.execPath}`);
console.log(`platform:${process.platform}`);
console.log(`arch:${process.arch}`);

console.log('before');
process.nextTick(()=>console.log('Next Tick'));
console.log('after');