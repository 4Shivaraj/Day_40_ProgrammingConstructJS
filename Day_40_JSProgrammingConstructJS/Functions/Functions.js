/*
1. Help user find degF or degC based on their Conversion Selection. 
Use Case Statement and ensure that the inputs are within the Freezing Point ( 0 °C / 32 °F ) 
and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9 
*/
const prompts = require('prompt-sync')();
console.log("UC1: Choose your option...");

function tempUnitConvert(option)
{
    let temp = prompts('Enter temperature: ');
    switch(option)
    {
        case 1:
            let degF = (temp * 9/5) + 32;
            console.log(temp+" degC = "+degF+" degF");
            break;
        case 2:
            let degC = (temp - 32) * 5/9;
            console.log(temp+" degF = "+degC+" degC");
            break;
        default:
            console.log("Choose option Correctly")
            break;
    }
}
let option = parseInt(prompts('1.degC to degF \n2.degF to degC\n'));
tempUnitConvert(option);

/*
2. Take a number from user and check if the number is a Prime then show

that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime
*/
const prompt = require('prompt-sync')();
console.log("UC2: Check whether number is pelindrome or not..");

function pelindrome(number)
{
    let rev = 0;
    let rem = 0;
    const temp = number;
    while(Math.floor(number) > 0)
    {
        rem = number%10;
        rev = rev*10 + rem;
        number -= rem;
        number /= 10;
    }
    if(rev==temp)
        console.log("Number is pelindrome");
    else
        console.log("Number is not pelindrome");
}
let number = parseInt(prompt('Enter number: '));
pelindrome(number);

/*
UC1: Choose your option...
1.degC to degF 
2.degF to degC
1.degC to degF
2.degF to degC
1
Enter temperature: 45
45 degC = 113 degF
UC2: Check whether number is pelindrome or not..
Enter number: 12321
Number is pelindrome
*/