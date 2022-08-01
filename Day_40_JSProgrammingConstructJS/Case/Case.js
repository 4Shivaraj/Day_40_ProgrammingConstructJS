//1. Read a single digit number and write the number in word using Case

function getNumToWord(num)
{
    switch(num)
    {
    case 0:
        console.log("Zero")
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid");
        break;
    }
}
const prompt = require('prompt-sync')();
const num = parseInt(prompt('UC1: enter a number to get a word: '));
getNumToWord(num);

//2. Read a Number and Display the week day (Sunday, Monday,...)

function getWeekDay(number)
{
    switch(number)
    {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid")
        break;
    }
}
const prompt1 = require('prompt-sync')();
const numbers = prompt1('UC2: enter a number to display week: ');
getWeekDay(parseInt(numbers));

//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt2 = require('prompt-sync')();
const digit = prompt2('UC3: enter a digit(like--1,10,100...): ');
switch (parseInt(digit)) 
{
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Hundred Thousand");
        break;
    case 1000000:
        console.log("Million");
        break;
    case 10000000:
        console.log("Ten Million");
        break;
    case 100000000:
        console.log("Hundred Million");
        break;
    case 1000000000:
        console.log("Billion");
        break;
    case 10000000000:
        console.log("Ten Billion");
        break;
    case 100000000000:
        console.log("Hundred Billion");
        break;
    default:
        console.log("out of limit");
        break;
}

/*4. Write a program that takes User Inputs and does Unit Conversion of

different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet*/

const prompt3 = require('prompt-sync')();
console.log("UC4: Choose your option...");
let option = prompt3('1.Feet to Inch \n2.Inch to Feet \n3.Meter to Feet \n4.Feet to Meter\n');
let number = prompt3('Enter quantity: ');
switch(parseInt(option))
{
    case 1:
        let inch = number*12;
        console.log(number+" feet = "+inch+" inch(s)");
        break;
    case 2:
        let feet = number/12;
        console.log(number+" inch(s) = "+feet+" feet");
        break;
    case 3:
        let feet1 = number*3.28084;
        console.log(number+" meter = "+feet1+" feet");
        break;
    case 4:
        let meter = number/3.28084;
        console.log(number+" feet = "+meter+" meter");
        break;
    default:
        console.log("Choose option Correctly")
        break;
}

/*
UC1: enter a number to get a word: 3
Three
UC2: enter a number to display week: 5
Friday
UC3: enter a digit(like--1,10,100...): 1000000
Million
UC4: Choose your option...
1.Feet to Inch
2.Inch to Feet
3.Meter to Feet
4.Feet to Meter
1.Feet to Inch
2.Inch to Feet
3.Meter to Feet
4.Feet to Meter
1
Enter quantity: 42
42 feet = 504 inch(s)
*/