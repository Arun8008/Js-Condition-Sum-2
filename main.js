let age1=prompt("Enter Your Age");
 let voter=prompt("voter id"); 
  
 if(age1>18){
      if(voter=="yes"){
         document.write("you are Eligible")
      }
      else{
         document.write("Apply The Voter id")
      }

 }
 else{
   document.write("you are not eligible")
 }