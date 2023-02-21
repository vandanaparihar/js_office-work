
// let book = ["maths","bio","phy","che","com"];

// book.unshift("hindi");

// console.log(book);




//pop: (last element remove):

// let book = ["maths","bio","phy","che","com"];

// book.pop();
// book.pop();

// console.log(book);



//shift(beging element remove):
// let book = ["maths","bio","phy","che","com"];

// book.shift();
// book.shift();
// console.log(book);



 //splice(middle element change):

//  let book = ["maths","bio","phy","che","com"];
// book.splice(1,3);
// console.log(book);



// empty(all array empty):
//let book = ["maths","bio","phy","che","com"];
//let text ="this is a random text";
//let wordarray =  text.split('s');

// book = [];
// book.length=0; // 2 types of array empty
// console.log(book);




//join(-) array and text joint and split
 
// let book = ["maths","bio","phy","che","com"];
// let wordarray = book.join('-') 
// console.log(wordarray);


//concat :
// let  book = ["math","phy","che","bio",];
// let  book2 =["hindi","english"];
// let book3 = ["punjabi","urdu"];
// let newbook =  book.concat(book2,book3 );
// console.log(newbook);



//  let book = ["math","phy","bio","computer","che"];
//  let bookwithpages = [  
//     ["math",["300","500"]],
//     ["phy","500"],
//     ["bio","400"]
// ];
//  let fetch = bookwithpages[0][1][1];
// console.log(fetch);





//array loop:

 let book = ["math","physics","bio","com"];
// let booklength = book.length;
// for(i=0;i<booklength;i++){
//     console.log(`Element ${i} is ${book[i]}\n`);
// }
book.forEach(myfu);
function myfu(value){
    console.log(value);
}


