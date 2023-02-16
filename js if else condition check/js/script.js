/*let age=15;
let hasvotercard="no";
/*if(age>=14 && hasVotercard== 'yes' ){

    alert("you can vote!");
   
} else if( age>=14 && hasVotercard != 'yes'){
    
    alert("Get your voter id card!");
}

else {
    
    alert("you can not vote!");
} */





/*if(age>=14)
   
    if(hasvotercard == 'yes'){
        alert("you can vote");
    }else{
    alert("Get your voter id card!");

}else {
    alert('you cannot vote!');

}*/


let isLoggedin = 0; //if 0 loggedout if 1 login
if(isLoggedin == 0){
    document.write('login');
}else{
    document.write('Logout');
}