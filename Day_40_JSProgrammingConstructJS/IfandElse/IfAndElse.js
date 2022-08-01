//1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

const arr = new Array(5);
maxValue = 0;
minValue = 1000;
for(let i = 1; i<= arr.length; i++)
{
    num = Math.floor(Math.random()*999);
    if(num >= 100)
    {
        console.log("Number"+i+ " is "+num)
        if(num>maxValue)
            maxValue = num;
        if(num<minValue)
            minValue = num;
    }
}
console.log("UC1: Minimum: "+minValue);
console.log("UC1: Maximum: "+maxValue);

//2. Write a program that takes day and month from the command line and prints true if day of month is 
//between March 20 and June 20, false otherwise.

const prompt = require('prompt-sync')();
console.log("Select Date ");
const date = parseInt(prompt("Enter date in numbers: "));
const month = prompt("Enter month in words: ").toLowerCase();

if (month == "march" && date >= 20 && date < 31) console.log("UC2: True");
else if(month =="april" && date <= 30) console.log("UC2: True");
else if(month =="may" && date <= 31) console.log("UC2: True");
else if(month =="june" && date < 20) console.log("UC2: True");
else
{
    console.log("UC2: False");
}

// 3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

console.log("Enter any Year to check If it is a Leap year or not?");
const prompts = require('prompt-sync')();
const year = parseInt(prompts('Enter year:  '));
if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    console.log("UC3: It's a Leap Year..");
else
    console.log("UC3: It's not a Leap Year..");

//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

console.log("Flip coin stimulator");
let flip = Math.floor(Math.random()*10)%2;
if(flip==0)
    console.log("UC4: Its Heads..");
else
    console.log("UC4: Its Tails..");

/*
Number1 is 789
Number2 is 264
Number4 is 215
Number5 is 563
UC1: Minimum: 215
UC1: Maximum: 789
Select Date
Enter date in numbers: 25
Enter month in words: April
UC2: True
Enter any Year to check If it is a Leap year or not?
Enter year:  2016
UC3: It's a Leap Year..
Flip coin stimulator
UC4: Its Tails..
*/