let person = {
    firstName: 'sanaya',
    lastName:'parihar',
    sayHello:function () {  //1st type
            console.log("Hello !");
        }

        //2nd type
        // sayHello () {
        //     console.log("Hello !");
        // }


};


person.age=21; //new properties add
person.firstName

//delete person.lastName;//delete property

console.log(person['firstName']);// 1.type
console.log(person.lastName);// 2. type


console.log(person); //all object seen

console.log('height' in person);//true or false return.


 //all properties access.

 //for in  loop.
 for(let key in person){
    console.log(key + ": "+ person[key]);
 }

//method : in js.
// person,sayHello = function () {
//     console.log("Hello !");
// }

person.sayHello;



function greet(){
    console.log("Hello !");

}
person.sayHello = greet;
person.sayHello();


 
 