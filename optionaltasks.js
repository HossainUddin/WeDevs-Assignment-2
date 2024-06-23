// --------------------------
//   Task 1: Loops
// --------------------------

function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers(); // 1 2 3 4 5 6 7 8 9 10


//   While Loop:

function printEvenNumbers() {
  let i = 2;

  while (i <= 20) {
    console.log("EvenNumber:", i);
    i += 2;
  }
}
printEvenNumbers(); // 2 4 6 8 10 12 14 16 18 20

//   Do-While Loop:

function printOddNumbers() {
  let i = 1;

  do {
    console.log("OddNumber:", i);
    i += 2;
  } while (i < 20);
}
printOddNumbers(); // 1 3 5 7 9 11 13 15 17 19

// --------------------------
// Task 2: Switch Statements
// --------------------------

function getDayName(dayNumber) {
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Webnasday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Provide A Valid Day Number..";
  }
  return dayName
}
console.log(getDayName(3)); // Tuesday
console.log(getDayName(7)); // Saturday
console.log(getDayName(0)); // Invalid day number



// --------------------------
// Task 3: 
// Variable and Function Scope
// --------------------------


function testBlockScope() {

  if (true) {
      let innerVar = "Hello, I am from innerVar";
  }
  console.log(innerVar); // ReferenceError: innerVar is not defined

}
testBlockScope();



// --------------------------
// Task 4: Immediately Invoked Function Expressions (IIFE)
// --------------------------


(function (){
  console.log("This is an IIFE"); // This is an IIFE
})();


(function (a ,b){
  console.log(a + b);
})(8 ,7); // 15