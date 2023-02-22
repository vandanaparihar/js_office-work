// function add(){
//     console.log(arguments.length)

// }
// add (5,7);
// add (5,7,8);
// arguments



function add(){
    if (arguments.length == 0){
        console.log("no parameter passed ! ");
    }else{
        let sum=0;  //12
        for( let i=0;i<arguments.length; i++){
            sum + arguments [i];
             
        }
        console.log(sum);
    }
}

add(5,7,10,);
