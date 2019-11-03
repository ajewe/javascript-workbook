// 1. Display the current day and time in javascript.
var currentDate = new Date(),
  day = currentDate.getDate(),
  month = currentDate.getMonth() + 1,
  year = currentDate.getFullYear();
  console.log(month + "/" + day + "/" + year)

var currentTime = new Date(),
  hours = currentTime.getHours(),
  minutes = currentTime.getMinutes();

  if (minutes < 10) { 
    minutes = '0' + minutes;
  }
  var suffix = "AM";
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours ==0) {
    hours = 12;
  }
  console.log(hours + ':' + minutes + " " + suffix)

// 2. Convert a number, 7 to a string, "7" in javascript.
let seven = "7";
console.log(seven + seven);

// 3. Convert a string, "7" to the number, 7 in javascript.
let sevenAgain = 7;
console.log(sevenAgain + sevenAgain);

// 4. Create one variable for each of the data types below:
  //Boolean i.e. var myBool = false;
    var bool = false;
    console.log(bool);

  //Null
    let ball = null;
    console.log(ball);

  //Undefined
    let thing = undefined;
    console.log(thing);

  //Number
    let five = 5;
    console.log(five);

  //NaN
    let NotANumber = 0/0;
    console.log(NotANumber);

  //String
    let aString = 'this is a string';
    console.log(aString);

function isTypeOf(data) {
  return console.log(typeof data);
}

isTypeOf(bool);
isTypeOf(ball);
isTypeOf(thing);
isTypeOf(five);
isTypeOf(NotANumber);
isTypeOf(aString);

// 5. Add 2 numbers together in javascript.
console.log(2 + 2)

// 6. Prints out "Both are TRUE" only when 2 things are true.
let a = 2;
let b = 3;
let prob1 = (a < b);
let prob2 = (a === 2);
let prob3 = (a > b);
let prob4 = (b === 4);

if (prob1 === true && prob2 === true){
  console.log('Both are TRUE');
}
// 7. Prints out "One of these is TRUE" when 1 of 2 things are true.
if (prob3 === false && prob1 ===true){
  console.log('One of these is TRUE');
}
// 8. Prints out "Neither is TRUE" when both things are not true.
if (prob3 === false && prob4 ===false){
  console.log('Neither is TRUE');
}