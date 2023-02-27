//object

let person = {
    firstName: 'sanaya',
    lastName:'parihar'

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

