//if input = 1,"y","yes" output = continue....
//if input = 0,"n","no" output = end...

// let input;
//  input = 1;

//  if(input === 1){
//     document.write("contionue...");

//  }else if(input === "y "){
//     document.write("contionue...");
//  }
    
//  else if(input ==="yes"){
//     document.write("contionue...");
//  }

//  else if(input === 0){
//     document.write("End....");
//  }

//  else if(input === "n"){
//     document.write("End....");
//  }

//  else if(input === "no"){
//     document.write("End....");
//  }

//  else {
//     document.write("wrong input");
//  }


// (***********=== comparison**********)
switch(input){
    case 1: // if (input === 1)
        document.write("continue....");
    break;
    case "y": // if (input ==="y")
        document.write("continue....");
    break;
    case "yes": // true  
        document.write("continue....");
        break; 
    case  0:
        document.write("End....");
        break;    
    case  "n":
        document.write("End....");
        break;   
     case  "no":
        document.write("End....");
        break;  
    default :
         document.write("wrong input");
         
            
}