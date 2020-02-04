console.time('loop');

const array = [1,2,3,4,5,6,8,9,0,11,12];

let newArray = array.map((value)=>{
    return value ** 2
});
console.log(newArray);
console.timeEnd('loop');

console.assert(1 === 1, '1 not eq 1');