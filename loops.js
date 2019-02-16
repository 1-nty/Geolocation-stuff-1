/************* DO WHILE *****************/
var text = "";
var i = 0;
do {
  text += "The number is " + i;
  i++;
}
while (i < 5);

/***************** While ***********/
var text = "";
var i = 0;
while (i < 5) {
  text += "<br>The number is " + i;
  i++;
}

/*********************************** FOR IN ********************/
var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}

/****************************FOR *************************/
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
