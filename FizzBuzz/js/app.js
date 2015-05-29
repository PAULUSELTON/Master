
$(document).ready(function(){
   $("button").on("click", getInput);

});


  function getNumber(input){
    
for( var i=1; i<=input; i++) {
        
        if ((i%5==0 && i%3==0))
          { $(".num").append( " Fizzbuzz" + "<br>");}
     
        else if (i%3==0)
          { $(".num").append( " Fizz" + "<br>");}
 
        else if  (i%5==0) 
          { $(".num").append(  " Buzz" + "<br>");}
       
        else { $(".num").append( i + "<br>");}  
		}
}

  function getInput() {
    var custInput = $(".datainput");
    var input = custInput.val();
    
  if ((input !== "") && (input <= 100) && (input >= 1) && ($.trim(input) !== "")) 

  {

    $(".num").html('');
   getNumber(input);
    custInput.val("");

  }
  else alert("Only type in a number between 1 and 100");
  }
