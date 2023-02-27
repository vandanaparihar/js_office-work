var person = {
    name:"sanaya",
    age:21,
    // getname: function(){
    //     return this.name.toUpperCase();
    // }

    set setname(n){
        this.name = n.toUpperCase();
    }
};
  person.setname = "saanj";
console.log(person);