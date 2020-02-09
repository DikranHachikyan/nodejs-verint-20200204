const {watch} = require('fs');

const options = {
    encoding:'utf8',
    recursive: true,
};

// watch('./', options, (eventType, filename)=>{
//     console.log(`event:${eventType} file:${filename}`);
// });
watch('./www', options, (eventType, filename)=>{
    console.log(`event:${eventType} file:${filename}`);
});

