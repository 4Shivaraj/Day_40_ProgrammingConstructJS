//1. Read a single digit number and write the number in word

function getNumToWord(number)
{
    if (number == 0) console.log("Zero");
    else if (number == 1) console.log("One");
    else if (number == 2) console.log("Two");
    else if (number == 3) console.log("Three");
    else if (number == 4) console.log("Four");
    else if (number == 5) console.log("Five");
    else if (number == 6) console.log("Six");
    else if (number == 7) console.log("Seven");
    else if (number == 8) console.log("Eight");
    else if (number == 9) console.log("Nine");
       else console.log("Invalid Number");
}
const prompt = require('prompt-sync')();
const num = prompt('UC1: enter a number to get a word: ');
getNumToWord(num);

//2. Read a Number and Display the week day (Sunday, Monday,...)

function getDay(number)
{
    if (number == 0) console.log("Sunday");
    else if (number == 1) console.log("Monday");
    else if (number == 2) console.log("Tuesday");
    else if (number == 3) console.log("Wednesday");
    else if (number == 4) console.log("Thursday");
    else if (number == 5) console.log("Friday");
    else if (number == 6) console.log("Saturday");
       else console.log("Invalid Number");
}
const prompt1 = require('prompt-sync')();
const numb = prompt1('UC2: enter a number to diplay week: ');
getDay(numb);

//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function displayUnit(digitplace)
{
    if( digitplace == 1) console.log("UC3: Unit");
    else if( digitplace == 10) console.log("Ten");
    else if( digitplace == 100) console.log("Hundred");
    else if( digitplace == 1000) console.log("Thousand");
    else if( digitplace == 10000) console.log("Ten Thousand");
    else if( digitplace == 100000) console.log("Hundred Thousand");
    else if( digitplace == 1000000) console.log("Million");
    else if( digitplace == 10000000) console.log("Ten Million");
    else if( digitplace == 100000000) console.log("Hundred Million");
    else if( digitplace == 1000000000) console.log("Billion");
    else console.log("Out of limit");
}
const prompt2 = require('prompt-sync')();
const digit = prompt2('UC3: enter a digit(like--1,10,100...): ');
displayUnit((digit));

/*4. Enter 3 Numbers do following arithmetic operation and find the one that

is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c */

const prompt3 = require('prompt-sync')();
function arithmaticOp(a,b,c)
{
    let operation1 = a + b * c;
    console.log("a + b * c = " +operation1);
    let operation2 = a + b / c;
    console.log("a + b / c = " +operation2);
    let operation3 = a % b + c;
    console.log("a % b + c = " +operation3);
    let operation4 = a * b + c;
    console.log("a * b + c = " +operation4);

    opArray = [operation1, operation2, operation3, operation4];
        min = opArray[0];
        max = opArray[0];
        for (array of opArray) 
        {
        if (array < min)   
            min = array;
        }
        for (array of opArray) 
        {
        if (array > max)  
            max = array;
        }
        console.log("maximum operation: " + max);
        console.log("minimum operation: " + min);
}
console.log('UC4: enter 3 Numbers do following arithmetic operation')
const firstNum = parseInt(prompt3('enter a first number: '));
const secondNum = parseInt(prompt3('enter a second number: '));
const thirdNum = parseInt(prompt3('enter a third number: '));
arithmaticOp(firstNum,secondNum,thirdNum);

/*
UC1: enter a number to get a word: 5
Five
UC2: enter a number to diplay week: 4
Thursday
UC3: enter a digit(like--1,10,100...): 1000000
Million
UC4: enter 3 Numbers do following arithmetic operation
enter a first number: 56
enter a second number: 76
enter a third number: 45
a + b * c = 3476
a + b / c = 57.68888888888889
a % b + c = 101
a * b + c = 4301
maximum operation: 4301
minimum operation: 57.68888888888889
*/