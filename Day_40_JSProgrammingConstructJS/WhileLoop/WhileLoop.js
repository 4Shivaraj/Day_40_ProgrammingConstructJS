// 1. Write a program that takes a command-line argument n and prints a
//table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

console.log("UC1: This program prints table of power of 2..")
const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter value of N=> '))
let num = 0;
let flag = 0;
let i = 0;
while(flag==0 && i<=number)
{
    num = Math.pow(2, i);
    i++;
    console.log(num);
    if(num>=256){
        flag = 1;
        console.log("256 is reached Can't go further");
    }
}

// 2. Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const prompts = require('prompt-sync')();
let N = parseInt(prompts("UC2: Enter a limit to guess number of you think.."));
let n = parseInt(Math.log(N,2));

console.log(`Enter a guess between 0 and + ${N-1}`);

let firstValue = 0;
let lastValue = N-1;
while (N > 0)
{
    let mid = Math.round((firstValue + lastValue) / 2);
    var ans =prompts(`Is this Greater than ${mid} ?`);
    if(ans=="y")
    {
        firstValue= mid;
    }
    else
    {
        lastValue = mid;
    }
    if((firstValue -lastValue) ==-1)
    {
        console.log(`This is your Number ${firstValue +1}`);
        return;
    }
    n -= 1;
}

// 3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.

console.log("UC3: This program tells who won the toss..");
let heads = 0;
let tails = 0;
while( heads != 11 && tails !=11)
{
    let random = Math.floor(Math.random() * 10) % 2;
    if(random == 0)
        heads++;
    else
        tails++
}
if(heads == 11)
    console.log("Heads Won");
else
    console.log("Tails Won");

// 4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet
// until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets
// made.

console.log("UC4: Gambling....");
let head = 0;
let tail = 0;
let maximum = 200;
let minimum = 0;
let money = 100;
while( money < maximum && money > minimum)
{
    let random = Math.floor(Math.random() * 10) % 2;
    //console.log("random "+random);
    if(random == 0){
        money++;
        head++;
        //console.log(" money after win "+money);
    }
    else{
        money--;
        tail++;
        //console.log("money after loss  "+money);
    }
}
console.log("Number of times win: "+head+"\nNumber of times loss: "+tail);

/*
UC1: This program prints table of power of 2..
Enter value of N=> 5
1
2
4
8
16
32
UC2: Enter a limit to guess number of you think..16
Enter a guess between 0 and + 15
Is this Greater than 8 ?y
Is this Greater than 12 ?n
Is this Greater than 10 ?n
Is this Greater than 9 ?n
This is your Number 9
UC3: This program tells who won the toss..
Heads Won
UC4: Gambling....
Number of times win: 7141
Number of times loss: 7241
*/