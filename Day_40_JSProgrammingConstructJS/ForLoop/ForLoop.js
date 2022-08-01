// 1. Write a program that takes a command-line argument n and prints a table of the
// powers of 2 that are less than or equal to 2^n.

console.log("UC1: This program gives you the table of power of 2 Upto N power..");
const prompt = require('prompt-sync')();
let term = parseInt(prompt('Enter the Value of N=> '));

for(let i=0;i<=term;i++)
{
    let power = Math.pow(2, i);
    console.log(power);
}

// 2. Write a program that takes a command-line argument n and prints the nth harmonic
// number. Harmonic Number is of the form

console.log("UC2: This program gives you the Nth harmonic number..");
const prompt1 = require('prompt-sync')();
let Num = parseInt(prompt1('Enter the Value of N=> '));
let harmonic = 0;
for(let i=1;i<=Num;i++)
{
    harmonic += (1/i);
}
console.log(harmonic);

// 3. Write a program that takes a input and determines if the number is a prime.

console.log("UC3: This program checks if number N is prime or not..");
const prompt2 = require('prompt-sync')();
let numb = parseInt(prompt2('Enter the number N=> '));
let flag = 0;
for(let i=2;i<=numb/2;i++)
{
    if(numb%i==0)
        flag = 1;
}
if(flag==0)
    console.log("Number is Prime");
else
    console.log("Number is not Prime");

// 4. Extend the program to take a range of number as input and output the Prime Numbers in that range.

console.log("UC4: This program gives you the Prime number in given Range..")
const prompt3 = require('prompt-sync')();
const lowerNumber = parseInt(prompt3('Enter lower number: '));
const higherNumber = parseInt(prompt3('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j <= i/2; j++)
    {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0)
    {
        console.log(i);
    }
}
// 5. Write a program that computes a factorial of a number taken as input.
// – 5! = 1 * 2 * 3 * 4 * 5

console.log("UC5: This program gives the Factorial of given number..")
const prompt4 = require('prompt-sync')();
const n = parseInt(prompt('Enter any number: '));
let fact=1;

for(let i=n; i>=1; i--)
{
    fact = fact * i;
}
console.log(fact);

// 6. Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

console.log("UC6: This program gives the prime Factors of given number..")
const prompt5 = require('prompt-sync')();
let number = parseInt(prompt('Enter any number: '));

for(let i=2;i<=number;i++)
{
    if (number % i==0)
        {
        let temp = 0;
        while (number % i==0)
        {
            temp++;
            number = number/i;
        }
        console.log(i+ " is the prime factor "+temp+ " times");
        }
}

/*
UC1: This program gives you the table of power of 2 Upto N power..
Enter the Value of N=> 5
1
2
4
8
16
32
UC2: This program gives you the Nth harmonic number..
Enter the Value of N=> 120
5.368868287353397
UC3: This program checks if number N is prime or not..
Enter the number N=> 7
Number is Prime
UC4: This program gives you the Prime number in given Range..
Enter lower number: 19
Enter higher number: 3
The prime numbers between 19 and 3 are:
UC5: This program gives the Factorial of given number..
Enter any number: 5
120
UC6: This program gives the prime Factors of given number..
Enter any number: 15
3 is the prime factor 1 times
5 is the prime factor 1 times
*/