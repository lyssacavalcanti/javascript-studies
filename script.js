
/* 1. _________________________________________________________________
A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons! 
Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.
Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons.
Will he survive?

Return "true" if yes, "false" otherwise.
*/

/* LOGICAL REASONING
    > Multiply the dragons' quantity by 2.
    > Comparate it with quantity of bullets. 
    > Verify if the quantity of bullets are equal or greater than the quantity of dragons. 

We can solve that hero's problem using a function with a conditional:
*/
function hero(bullets,dragons){                                                                
    if (bullets >= (dragons * 2)){
    return  true;
    } else {
    return  false;
    }
   }
hero(14,7);
console.log(hero(14,7));