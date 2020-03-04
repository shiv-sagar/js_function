// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 //Function Declaration
 function addOne(n) {
   return (n+1);
 }

 //Function Expression
 let addOne = function(n) {
   return n+1
 };

 //Arrow Function
 let addOne = n => n+1;

 //Arrow Function with Curly Bracket

 let addOne = n => {
   return n+1;
 }

 //Function Invocation

 addOne(5);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */


 //Function Declaration
 function subOne(n) {
  return (n-1);
}

//Function Expression
let subOne = function(n) {
  return n-1
};

//Arrow Function
let subOne = n => n-1;

//Arrow Function with Curly Bracket

let subOne = n => {
  return n-1;
}

//Function Invocation

subOne(6);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */


 //Function Declaration
 function add(x, y) {
  return x + y;
}

//Function Expression
let add = function(x, y) {
  return x + y;
};

//Arrow Function
let add = (x, y) => x + y;

//Arrow Function with Curly Bracket

let add = (x, y) => {
  return x + y;
}

//Function Invocation

add(2, 5);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 //Function Declaration
 function sub(x, y) {
  return x - y;
}

//Function Expression
let sub = function(x, y) {
  return x - y;
};

//Arrow Function
let sub = (x, y) => x - y;

//Arrow Function with Curly Bracket

let sub = (x, y) => {
  return x - y;
}

//Function Invocation

sub(5, 2);


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 //Function Declaration
 function mul(x, y) {
  return x * y;
}

//Function Expression
let mul = function(x, y) {
  return x - y;
};

//Arrow Function
let mul = (x, y) => x * y;

//Arrow Function with Curly Bracket

let mul = (x, y) => {
  return x * y;
}

//Function Invocation

mul(5, 2);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Function Declaration
function div(x, y) {
  return x / y;
}

//Function Expression
let div = function(x, y) {
  return x / y;
};

//Arrow Function
let div = (x, y) => x / y;

//Arrow Function with Curly Bracket

let div = (x, y) => {
  return x / y;
}

//Function Invocation

div(6, 2);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //Function Declaration
 function square(x) {
  return x * x;
}

//Function Expression
let square = function(x) {
  return x * x;
};

//Arrow Function
let square = x => x * x;

//Arrow Function with Curly Bracket

let square = x => {
  return x * x;
}

//Function Invocation

square(5);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 //Function Declaration

 function calculate(op, x, y){
   switch(op) {
     case "addition" : console.log(`${x} + ${y} = ${x + y}`);
     return x + y;

     case "substraction" : console.log(`${x} - ${y} = ${x - y}`);
     return x - y;

     case "multiplication" : console.log(`${x} * ${y} = ${x * y}`);
     return x * y;

     case "division" : console.log(`${x} + ${y} = ${x / y}`);
     return x / y;
   }
 }

 //Function Expression

 let calculate = function(op, x, y){
  switch(op) {
    case "addition" : console.log(`${x} + ${y} = ${x + y}`);
    return x + y;

    case "substraction" : console.log(`${x} - ${y} = ${x - y}`);
    return x - y;

    case "multiplication" : console.log(`${x} * ${y} = ${x * y}`);
    return x * y;

    case "division" : console.log(`${x} + ${y} = ${x / y}`);
    return x / y;
  }
}

//Arrow Function with curly bracket

let calculate = (op, x, y) => {
  switch(op) {
    case "addition" : console.log(`${x} + ${y} = ${x + y}`);
    return x - y;

    case "substraction" : console.log(`${x} - ${y} = ${x - y}`);
    return x - y;

    case "multiplication" : console.log(`${x} * ${y} = ${x * y}`);
    return x * y;

    case "division" : console.log(`${x} + ${y} = ${x / y}`);
    return x / y;
  }
}

//Function invocation

calculate("addition", 6, 3)

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 //Function Declaration
 function checkGreater(a, b) {
  return a > b;
}

//Function Expression
let checkGreater = function(a, b) {
  return a > b;
};

//Arrow Function
let checkGreater = (a, b) => a > b;

//Arrow Function with Curly Bracket

let checkGreater = x => {
  return a > b;
}

//Function Invocation

checkGreater(5, 6);
 

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Declaration
function checkLesser(a, b) {
  return a > b;
}

//Function Expression
let checkLesser = function(a, b) {
  return a < b;
};

//Arrow Function
let checkLesser = (a, b) => a < b;

//Arrow Function with Curly Bracket

let checkLesser = (a, b) => {
  return a < b;
}

//Function Invocation

checkLesser(5, 6);
 


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//Function Declaration
function isEqual(a, b) {
  return a == b;
}

//Function Expression
let isEqual = function(a, b) {
  return a == b;
};

//Arrow Function
let isEqual = (a, b) => a == b;

//Arrow Function with Curly Bracket

let isEqual = (a, b) => {
  return a == b;
}

//Function Invocation

isEqual(5, 6);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 //Function Declaration
function small(x, y) {
  return x > y ? y : x;
}

//Function Expression
let small = function(x, y) {
  return x > y ? y : x;
};

//Arrow Function
let small = (x, y) => x > y ? y : x;

//Arrow Function with Curly Bracket

let small = (x, y) => {
  return x > y ? y : x;
}

//Function Invocation

small(5, 6);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

  //Function Declaration
function large(x, y) {
  return x < y ? y : x;
}

//Function Expression
let large = function(x, y) {
  return x < y ? y : x;
};

//Arrow Function
let large = (x, y) => x < y ? y : x;

//Arrow Function with Curly Bracket

let large = (x, y) => {
  return x < y ? y : x;
}

//Function Invocation

large(8, 6);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */


 //Function Declaration
 function checkEven(n) {
  return n % 2 == 0;
}

//Function Expression
let checkEven = function(n) {
  return n % 2 == 0;
}

//Arrow Function
let checkEven = n => n % 2 == 0;

//Arrow Function With Curly Bracket
let checkEven = n => {
  return n % 2 == 0;
}

//Function Invocation
checkEven(4);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 //Function Declaration
 function checkOdd(n) {
  return n % 2 == 1;
}

//Function Expression
let checkOdd = function(n) {
  return n % 2 == 1;
}

//Arrow Function
let checkOdd = n => n % 2 == 1;

//Arrow Function With Curly Bracket
let checkOdd = n => {
  return n % 2 == 1;
}

//Function Invocation
checkOdd(4);



/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function declaration
 function grade(score, total = 100) {
   switch(score <= total) {
     case (score >= 90) : return "A";
     case (score >= 80 && score < 90): return "B";
     case (score > 69 && score < 80 ) : return "C";
     case (score > 59 && score < 70): return "D";
     default : return "F";
   }
 }

 
//Function Expression
let grade = function(score, total = 100) {
  switch(score <= total) {
    case (score >= 90) : return "A";
    case (score >= 80 && score < 90): return "B";
    case (score > 69 && score < 80 ) : return "C";
    case (score > 59 && score < 70): return "D";
    default : return "F";
  }
}

//Arrow Function With curly bracket
let grade = (score, total = 100) => {
  switch(score <= total) {
    case (score >= 90) : return "A";
    case (score >= 80 && score < 90): return "B";
    case (score > 69 && score < 80 ) : return "C";
    case (score > 59 && score < 70): return "D";
    default : return "F";
  }
}


//Function Invocation
grade(78);


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

//Function Declaration
function joinStrs(word1, word2) {
  return (`${word1+ " " + word2}`);
}

//Function Expression
let joinStrs = function(word1, word2) {
  return (`${word1+ " " + word2}`);
}

//Arrow Function
let joinStrs = (word1, word2) => (`${word1+ " " + word2}`);


//Arrow Function With Curly Bracket
let joinStrs = (word1, word2) => {
  return (`${word1+ " " + word2}`);
}

//Function Invocation
joinStrs("shiv", "sagar");




