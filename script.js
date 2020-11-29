
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

/* 8. SET ALARM
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

  /* 9. HELLO, NAME OR WORLD!
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

/* 10. ARRAY PLUS ARRAY
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

/* 10. MULTIPLICATION TABLE FOR NUMBER
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

/* 11. SQUARING AN ARGUMENT
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

/* 12. STRING REPEAT
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


/* 13. BARTENDER, DRINKS!
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

/* 14. FUNCTION 1 - HELLO WORLD!
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


/* /* 13. BARTENDER, DRINKS!
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