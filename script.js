alert('welcome to our site');

document.writeln('Thank you for viewing'); 
 
var Password = prompt("enter password");

var x = new String("Trevor");             

if( Password == x ) {
	document.writeln(customerName);
}
else if( Password == y) {
	document.writeln(customerName);
}
 else { 
	window.location = "bad.htm";
}
  
function myFunction() {
  var txt;
  var newLine = "\r\n"
   var message = "You Should check these options:"
      message += newLine;
      message += "The office(show)";
      message += newLine;
      message += "Step Brothers(show)";
      message += newLine;
      message += "Friends(show)";
	  message += newLine;
      message += "The Other Guys(movie)";
	  message += newLine;
      message += "New Girl(show)";
  
  if (confirm(message)) {
    txt = "have a laugh";
  } 
  else {
    txt = "You pressed Cancel";
  }
  document.getElementById("try").innerHTML = txt;
}

function myFunction2() {
  var txt;
  var newLine = "\r\n"
   var message = "You Should check these options:"
      message += newLine;
      message += "Game of Thrones(show)";
      message += newLine;
      message += "One Piece(show)";
      message += newLine;
      message += "Super Bowl LI(sports)";
	  message += newLine;
      message += "Black Ops Cold War(video game)";
  
  if (confirm(message)) {
    txt = "get it goin";
  } 
  else {
    txt = "You pressed Cancel";
  }
  document.getElementById("try").innerHTML = txt;
}

function myFunction3() {
  var txt;
  var newLine = "\r\n"
   var message = "You Should check these options:"
      message += newLine;
      message += "The Outsiders (book)";
  
  if (confirm(message)) {
    txt = "thats dramatic";
  } 
  else {
    txt = "You pressed Cancel";
  }
  document.getElementById("try").innerHTML = txt;
}



	  
	


