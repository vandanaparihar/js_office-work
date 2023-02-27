//let x = Math.floor(Math.random()* 10) + 1;// gerate number 0 to - 1 
 
function getRandom(min,max){
    let x= Math.floor(Math.random() * (max-min)) + min;
return x;
}
//let x= Math.floor(Math.random() * (25-15)) + 15; 
console.log(getRandom(10,20));
