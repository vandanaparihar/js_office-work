alert(' welcome !!' );
prompt('enter your age:');
confirm('are u sure ,you want to delete?')
//confirm('are you sure you want to delete ?');
let age = prompt('Enter your age',20);





//if (age != null){
//     document.write(`Your age is ${age}`);

// }
// else{
//     document.write('Age field  was blank');
// }

let response = confirm('are u sure ,u want to delete?');
if(response){
    document.write('Delted');

} else{  
    
    document.write(' not Delted');
}