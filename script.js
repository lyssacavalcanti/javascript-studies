
/* 1. HERO'S BULLET - CHALLENGE
_________________________________________________________________
A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons! 
Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons.
Will he survive?

Return "true" if yes, "false" otherwise.
*/

/* LOGICAL REASONING:
    > Multiply the dragons' quantity by 2.
    > Comparate it with quantity of bullets. 
    > Verify if the quantity of bullets are equal or greater than the quantity of dragons. 
*/

/* RESOLUTION:
We can solve that hero's problem using a function with a conditional:
*/

function hero(bullets,dragons){                                                                
    if (bullets >= (dragons * 2)){
        return  true;
    } else {
        return  false;
    }
   };
hero(14,7);
console.log(hero(14,7));

/* Discovered another way to solve the hero's problem using 
a shorter and best practice function.*/

function hero(bullets, dragons){
    return bullets >= dragons * 2
  }
hero(14,7);
console.log(hero(14,7));


/* 2. KEEP HYDRATED - CHALLENGE
_________________________________________________________________
Because Joe knows it is important to stay hydrated, 
he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Joe will drink, 
rounded to the smallest value.

For example:

time = 3 -> litres = 1

time = 6.7 -> litres = 3

time = 11.8 -> litres = 5
*/

/* LOGICAL REASONING:
    > If 1 hour equals 0.5l, then 1h x 0.5l.
    > Round the number with the lowest value (if it's a fraction) and return it.
*/

/* RESOLUTION:

It's possible to solve that calculation with a function and the Math.floor method to
round the to the smallest value:
*/
function litres(time) {
    return (Math.floor(time * 0.5))
  }

console.log(litres(4.5));

/* 3.REVERSE WORDS - CHALLENGE
_________________________________________________________________
Complete the solution so that it reverses all of the words within 
the string passed in.
Example:
reverseWords("The greatest victory is that which requires no battle.")
Should return "battle. no requires which that is victory greatest The"
*/

/* LOGICAL REASONING:
    > Should to split, invert and join all the words in a statement.
    > Return that statement with the result.
*/

/* RESOLUTION:
We can solve that challenge using a function with the methods .split, .reverse and .join.
*/
function reverseWords(str){
    return str.split(" ").reverse().join(" ");// reverse those words
  };

reverseWords("The greatest victory is that which requires no battle.");
console.log(reverseWords("The greatest victory is that which requires no battle."));

/* 4. RETURNING STRINGS - CHALLENGE
_________________________________________________________________
Make a function that will return a greeting statement that uses an input. 
Your program should return, "Hello, <name> how are you doing today?".
SQL: return results in a column named greeting.
Make sure you type the exact thing I wrote or the program may not execute properly.
*/

/* LOGICAL REASONING:
    > Write a greeting statement and insert a random name came from SQL.
*/

/* RESOLUTION:
That challenge can be solved using a function indexing a name in ES6 format.
*/
function greet(name){
    return `Hello, ${name}! How are you doing today?`
  }
greet("Fernando");
console.log(greet("Fernando"));

/* 5. YOU CAN'T CODE UNDER PRESSURE - CHALLENGE
_________________________________________________________________
Code as fast as you can! You need to double the integer and return it.
*/

/* LOGICAL REASONING:
    > Just double the number mutiplying it by 2 and show it.
*/

/* RESOLUTION:
A simple function that returns a multiplication of the number given
can help us to solve that.
*/

function doubleInteger(i) {
    return i*2;
  };

doubleInteger(10);
console.log(doubleInteger(10));


/* 6. MULTIPLY
_________________________________________________________________
This code does not execute properly. Try to figure out why.

function multiply(a, b){
  a * b
}
*/

/* LOGICAL REASONING:
    > Analyze what's wrong in the function.
    > Fix the wrong part.
    > Make sure that it's working.
*/

/* RESOLUTION:
All the functions are made to give us some type of return and that's was exacly 
missing on the function given.
*/

multiply = function (a, b) {
    return a * b;
  }
multiply(32,12);
console.log(multiply(32,12));

  /* All the challenges came from sources: Code Wars, SoloLearn, FreeCodeCamp and others.*/

/* 7. BEGINNER SERIES #CLOCK
_________________________________________________________________
Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to milliseconds.
*/

/* LOGICAL REASONING:
    > Convert seconds in milliseconds: 1.000;
    > Convert minutes in milliseconds: 60.000;
    > Convert hours in milliseconds: 3.600.000;
    > Return convertion of s, m, h.
*/

/* RESOLUTION:
Inserted each type of time in one const and converted it in milliseconds.
Used a multiplication of that convertion to sum with the others results.
Showed it on return of the function. 
*/

function past(h, m, s){
    const segundo = 1000;
    const minuto = 60000;
    const hora = 3600000;
    return ((s*segundo)+(m*minuto)+(h*hora))
  };
  past(1, 1, 1);
  console.log(past(10, 12, 16));

/* 8. GET THE MEAN OF AN ARRAY
_________________________________________________________________
It's the academic year's end, fateful moment of your school report. 
The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them.
Easy! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

/* LOGICAL REASONING:
    > Use a function to make all the calculations;
    > Must use reduce to iterate over an array and use the value of each item to create a final object.
    > Divide the reduce's result to quantity of items of array.
    > Use the method Math.floor to make the array rounded down to it nearest integer.
    */

/* RESOLUTION:
Used the parameter called "marks" to symbol school's grade.
Made the reduce method divided to the length method.
Used the result above to rounded it to its nearest integer.
*/
function getAverage(marks){
  return Math.floor(marks.reduce((sum,x)=> sum + x)/marks.length)
 }

/* 9. SET ALARM
_________________________________________________________________
Write a function named setAlarm which receives two parameters. 
The first parameter, employed, is true whenever you are employed and the second parameter, 
vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the 
circumstances under which you need to set an alarm). 
It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

/* LOGICAL REASONING:
    > Follow the instructions to set the alarm;
    > Use Boolean to make the right results;
    */

/* RESOLUTION:
Used the parameters "employed" and "vacation" to compose the function.
Could used if/else inside the function to have the same result, but to trainning
diferents ways to solve a problem and to make a shorter code, I decided to use 
the ternary operator.
*/
   function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false
  }

  setAlarm (true,false);
  console.log(setAlarm(true,false));

  /* 10. HELLO, NAME OR WORLD!
_________________________________________________________________
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:
    hello "john"   => "Hello, John!"
    hello "aliCE"  => "Hello, Alice!"
    hello          => "Hello, World!" # name not given
    hello ''       => "Hello, World!" # name is an empty String
*/

/* LOGICAL REASONING:
    > Check if "name" has been defined:
       If not: return "Hello World!"
       If yes: return "Hello, 'name'!"
     > First letter of "name" must be upercase in all cases;
     > Subsequent letters must be lowercase in all cases.
    */

/* RESOLUTION:
Used a compose of function with a if/else. Inside if/else, was checked if "name"was defined using the typeof method.
Then, used the toUpperCase method to turn the first letter in uppercase, on the other hand used the toLowerCase method
to turn all the others letters of string to lowercase.
*/
   
   function hello(name) {
    if (typeof name === undefined) {
    return "Hello, World!";
    } else {
    return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
  }
};
  
  hello("SHELBY");
  console.log(hello("SHELBY"));

  hello("eMILY");
  console.log(hello("eMILY"));

  hello("enola");
  console.log(hello("enola"));

  hello("Harmon");
  console.log(hello("Harmon"));

/* 11. ARRAY PLUS ARRAY
  _________________________________________________________________
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}

Examples tests:
  Test.describe("Basic tests",function(){
  Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
  Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
  Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
  Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
})
*/

/* LOGICAL REASONING:
    > Sum all the elements of each array;
    > Sum the results of each array;
    > Return it as number output. 
    */

/* RESOLUTION:
   A compose of function and the method reduce is enough to resolve that challenge.
   Inside the function, the first step is reduce the arr1 to a single number, then do the same with arr2.
   So, we can sum the results of two and return it on the function.  
*/
const numbersList = [1, 2, 3];
const total = numbersList.reduce((total, currentElement) => total + currentElement)
console.log(total);

var arr1 = [1, 2, 3,];
var arr2 = [4, 5, 6];

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce ((total, currentElement) => total + currentElement) 
  + arr2.reduce((total, currentElement) => total + currentElement); 
}

console.log(arrayPlusArray(arr1,arr2));

/* 12. MULTIPLICATION TABLE FOR NUMBER
  _________________________________________________________________
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.
*/

/* LOGICAL REASONING:
    > Separe each number present on the array [1,2,3,4,5,6,7,8,9,10];
    > Multiply each number to the factor given;
    > Return the result in string format like the example "1 * 5 = 5";
    > Insert the \n to show each string resulted in a separeted line in the table.
    */

/* RESOLUTION:
   First, the function was structured in ES6 format, so, the function was inserted in a const.
   To separe each number, the .map method was used. The  results was indexed to transform it in a individual string.
   At the last, the method .join made all the indexed informations as just one statement.
   The element "\n" was implemented to make another line in the table.  
*/

  const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')
  
multiTable(5);
console.log(multiTable(5));

/* 13. SQUARING AN ARGUMENT
_________________________________________________________________
Now you have to write a function that takes an argument and returns the square of it.
Test.assertEquals(square(3), 9);
*/

/* LOGICAL REASONING:
    > Multiply the number for itself
    > Return it
    */

/* RESOLUTION:
   Used a simple function to make a square of a number, as the example bellow.  
*/

function squareNum (number) {
  return number*number
}

squareNum(2);
console.log(squareNum(2));

/* 14. STRING REPEAT
_________________________________________________________________
Write a function called repeat_str which repeats the given string src exactly count times.
    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" 
*/

/* LOGICAL REASONING:
    > Repeat the string accord with the number given.
    > Reduce -1 from number each time that the loop runs. 
    */

/* RESOLUTION:
  A compose of function with a the while method helped to resolve it.
  Inside the function, a let was created to receive the new string multiplied.
  Then, the while method add a string to the let many times accord to argument number.
  So, the function returns the let with the string repeated.
*/

function repeatStr(n, s) {
  let repeatedString = "";
  while (n > 0) {
    repeatedString += s;
    n --;
  }
  return repeatedString;
}
repeatStr(3,"abc");
console.log(repeatStr(3,"abc"));


/* 15. BARTENDER, DRINKS!
_________________________________________________________________
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine" 
 "Politician"	"Your tax dollars" 
 "Rapper"	"Cristal" 
 *anything else*	"Beer" 
*/

/* LOGICAL REASONING:
    > First, transform all the letters in the profession to lower case;
    > Compare each profession and return the respective drink;
    > Make a suggestion with bear if the profession is not listed in the examples.
*/

/* RESOLUTION:
  A function composed with an if/else and the method toLowerCase() can
  help us to solve that challenge.
*/

function getDrinkByProfession(param){
  var input = param
  if (input.toLowerCase() === "jabroni") {
    return "Patron Tequila"
  } else if (input.toLowerCase() === "school counselor") {
    return "Anything with Alcohol"
  } else if (input.toLowerCase() === "programmer") { 
    return "Hipster Craft Beer"
  } else if (input.toLowerCase() === "bike gang member") {
    return "Moonshine"
  } else if (input.toLowerCase() === "politician") {
    return "Your tax dollars"
  } else if (input.toLowerCase() === "rapper") {
    return "Cristal"
  } else {
    return "Beer"
  }
};

getDrinkByProfession("RAPPER");
console.log(getDrinkByProfession("RAPPER"));

/* 16. FUNCTION 1 - HELLO WORLD!
_________________________________________________________________
Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. 
But how clever can you be to create the most creative hello world you can think of? 
What is a "hello world" solution you would want to show your friends?
*/

/* RESOLUTION:
  Used that challenge to trains some ES6 skills with a short arrow function.
*/

greet = () => {
  return "hello world!"}

console.log(greet());


/* 17. GETPLANETNAME BY ID!
_________________________________________________________________
The function is not returning the correct values. Can you figure out why?

getPlanetName(3); // should return 'Earth'

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  
  return name;
}
*/

/* RESOLUTION:
  In that case, a function composed with a switch case was broken, beacuse wasn't returning the right answer according
  the input id. The very first thing is analyze the code and understand what's wrong.
  The debbuging was pretty fast because I notice that all the breaks was missed, so, as long as the code runned,
  just the last name was returned, beacuse the there wasn't how read and return it on the right answer.
*/


function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

console.log(getPlanetName(3));

/* 18. YOU ONLY NEED ONE - BEGINNER
_________________________________________________________________
You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/

/* RESOLUTION:
  At first, I tried to solve that challenge with an default if/else.
  But had an idea to research about different ways to solve it and found 
  the method .includes(), that works like a Boolean to check and return if 
  it's true or false.
*/

var nomes = ['Matheus', 'Henrique', 'João', 'Pedro'];
function check(nomes, x) {
  return nomes.includes(x);
}
console.log(check(nomes,'Fernando'));

/* 19. OPPOSITE NUMBER
_________________________________________________________________
Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

/* RESOLUTION:
  That challenge serves to train the logical reasoning, so at first attempt
  I made solution with a function that makes a multiplication of number by 2, and then,
  substract from the number given.
*/

function opposite(number) {
  return (number - (number*2))
}

console.log(opposite(-50));

/* 20. REMOVE STRING SPACE
_________________________________________________________________
Simple, remove the spaces from the string, then return the resultant string.

Sample tests:
Test.describe("Example tests",_=>{
Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
});
*/

/* RESOLUTION:
  It's a simple challenge, but made me research about the necessary solution,
  that envolves Regex (that was the very first time that I coded a Regex solution). 
*/

function noSpace(x){
 return x.replace(/\s/g, '');
}

console.log(noSpace("Re m o v a  t od os os es pa ços ."));

/* 21. SUM OF POSITIVE
_________________________________________________________________

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

/* RESOLUTION:
  Inside the function, I used the method for to setup loop to go through array of the lenght given.
  Then, the method if arr[i] checks if it's greater than zero and finally, add arr total.
*/

var arr4 = [1,-4,7,12];

function positiveSum (arr) {
  var sum = 0
  var arr = arr4
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(positiveSum()); //20


/* 22. BEGINNER SERIES #1 SCHOOL PAPERWORK
_________________________________________________________________

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25
Note: if n < 0 or m < 0 return 0!
*/

/* RESOLUTION:
  To solve that challenge, was necessary use a if/else composed with a verification if the parameters n and m was 
  greater than 0. 
  In case that n and/or m was smaller than 0, it must return 0.  
*/

paperwork = (n, m) => {
  if (n > 0 && m > 0) {
    return n * m
  } else { 
    return 0
  }
}
console.log(paperwork(2, -5));

/* 23. WILL YOU MAKE IT?
_________________________________________________________________

You were camping with your friends far away from home, but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. 
The input values are always positive.
*/

/* RESOLUTION:
  First, used a simple equation to calculate if was possible arrive the pump just using the quantity of fuel left.
  Then, used that result information to check if it was true or false and return it.  
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const pumpOrNot = ((mpg * fuelLeft) / distanceToPump)
  if (pumpOrNot >= 1) {
    return true
  } else {
    return false
  }

}

console.log(zeroFuel(50, 25, 2));

/* 24. SIMPLE MULTIPLICATION
_________________________________________________________________
  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

/* RESOLUTION:
  This challenge was resolved with the modules method in a if/else and a function.
*/

function simpleMultiplication(number) {
  if ((number % 2) === 0) { 
    return number * 8
  } else {
    return number * 9
  }
}
console.log(simpleMultiplication(2));

/* 25. ONE LINE TASK: MAKE PIZZA
_________________________________________________________________
Task
Fix the code to pass all the tests. Unfortunately, you can only modify ONE line of code :(

Rules
Usually, the changes you make are limited to one line. Please don't complain that you can't write your own code, because this is a bugfix kata. Also, don't complain that the initial code is too messy. That's why you need to do the task ;-)

You can do the following operations:
1 - Replace the existing characters.

2 - Add the character at the end of the line.

You should not Add a new line or Delete a line.
The overall difference of the modified code is less than 5 characters.
*/

/* RESOLUTION:
  This challenge was solved with just 2 characters (+1) to follow the rules above.
*/

function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
  var result = "";
  while ( pieces-- ){
    var needSteps = 5;
    while ( needSteps-- ) result += make( needSteps );
  }
  return result;
}
function make(step){
  switch (step+1){
    case 5: return "P";
    case 4: return "i";
    case 3: 
    case 2: return "z";
    case 1: return "a";
  }
}
console.log(makePizza(3));

/* 26. POWER
_________________________________________________________________
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/

function numberToPower(number, power) {
  let total = 1;
  for (let i = 1; i <= power; i++) {
    total = total * number;
  }
  return total;
};

console.log(numberToPower(3,2));
console.log(numberToPower(2,3));
console.log(numberToPower(10,6));
console.log(numberToPower(4,10));
console.log(numberToPower(3,9));

/* 27. VOWEL REMOVER
_________________________________________________________________
Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/

function shortcut (string) {
  return string.replace(/[aeiou]/gi,'')
}

console.log(shortcut('asbmzxogtIf you act fast, you too can be part of the anti-duplication squad - send in your membership now!'))

/*28. Calling a Function Inside Another Function
A Fruit processor only works well if the fruits be cutted. Create a function of fruit processor
that call another function that cut all fruits in pieces, inside it.
*/ 

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} piece of 🍎 and ${orangePieces} 
	pieces of 🍊.`;
  return juice;
}
console.log(fruitProcessor(2,3));

/* 29. Concatenating 2 Arrays
Use the method .concat to join the two arrays given: array1 and array2.
*/ 

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = array1.concat(array2);

console.log(array3);

/* 30. CONVERT A BOOLEAN TO A STRING
_________________________________________________________________
Implement a function which convert the given boolean value into its string representation.

Sample tests:
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
*/ 

function booleanToString(b){
  return b.toString()
}

console.log(booleanToString(true));


/* 31. DO I GET A BONUS?
_________________________________________________________________
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

SAMPLE TESTS
Test.describe("Basic tests",_=>{
Test.assertEquals(bonusTime(10000, true), '£100000');
Test.assertEquals(bonusTime(25000, true), '£250000');
Test.assertEquals(bonusTime(10000, false), '£10000');
Test.assertEquals(bonusTime(60000, false), '£60000');
Test.assertEquals(bonusTime(2, true), '£20');
Test.assertEquals(bonusTime(78, false), '£78');
Test.assertEquals(bonusTime(67890, true), '£678900');
})
*/ 

function bonusTime(salary, bonus) {
  if (bonus === true) {
    salary = salary * 10
  } else {
    salary
  }
  return `£${salary}`
 }

 console.log(bonusTime(10000,true));
 console.log(bonusTime(78,false));
