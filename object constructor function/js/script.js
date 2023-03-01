// var stu1 = {
//     firstName = "sanaya",
//     lastName = "parihar",
//     age : 21,

// }


 function Student(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
 }
 
 var stu1 = new Student("sanaya","parihar",21);
 stu1.nationality = "Indian";
 stu1.name =function(){
    return this.firstName +" "+ this.lastName;
 }
 console.log(stu1.name());
