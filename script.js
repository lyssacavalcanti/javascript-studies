
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

  /* All the challenges came from sources: Code Wars, SoloLearn, FreeCodeCamp and others.*/