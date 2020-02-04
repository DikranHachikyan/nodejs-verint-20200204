const {EventEmitter} = require('events');

class UploadManager extends EventEmitter{

    //инициализира данните на класа
    constructor(){
       super(); //извикваме констр. на родителя 
    }

    upload(url){
        let progress = 0,
            filesize = 0,
            _this = this;
        
        console.log(`Upload started ${url}`);

        let progressInterval = setInterval(()=>{
            progress += 20;
            filesize += 50;
            _this.emit('progress',{'progress':progress, 'size':filesize})
        },200);

        setTimeout( ()=>{
            clearInterval(progressInterval);
            _this.emit('finished',filesize);
        },1200)

    }
}// upload manager


const uploader = new  UploadManager();

uploader.upload('movie.mp4');

uploader.on('progress',(data)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress:${data.progress} size:${data.size}`);
});

uploader.on('finished',(data)=>{
    process.stdout.write(`\nUploaded:${data}\n`);
});