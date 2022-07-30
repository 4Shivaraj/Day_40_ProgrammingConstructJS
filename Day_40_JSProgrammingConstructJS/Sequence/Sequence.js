//1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit.
let num = Math.floor(Math.random()*10);
console.log("UC1 :"+num);

//2. Use REPL – Use Random to get Dice Number between 1 to 6.
let diceNum=Math.floor(Math.random()*6)+1;
console.log("UC2 :"+diceNum);

//3. Use REPL – Add two Random Dice Number and Print the Result
let a= (Math.floor(Math.random() * 10) % 6) + 1;
let b= (Math.floor(Math.random() * 10) % 6) + 1;
let c=a+b;
console.log("Random1 is:" + a + " Random2 is:" + b);
console.log("UC3 Addition Of 2Random Numbers is: " + c);

//4. Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,
//then find their sum and the average
let sum = 0;
for(let i = 0; i<5; i++ )
{
    sum += Math.floor(Math.random() * 100);
}
console.log("UC4 Sum is: " + sum + " Average is: " + sum/5);

// 5. Use Script & Debug – Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres

function GetArea(length, breadth)
{
    length = length/12;
    breadth = breadth/12;
    console.log("Length of plot in m " + length + " Breadth of plot in m " + breadth);
    return length*breadth;
}

for(let plotNo = 0; plotNo< 25; plotNo++)
{
    let length = Math.floor(Math.random() * 99);
    let breadth = Math.floor(Math.random() * 99);
    console.log("Length of plot in ft " + length + " Breadth of plot in ft " + breadth);
    let area = GetArea(length, breadth);
    console.log("Area in metre sq For Plot No" +plotNo+"is"+area);
}

/*
UC1 :9
UC2 :3
Random1 is:3 Random2 is:5
UC3 Addition Of 2Random Numbers is: 8
UC4 Sum is: 310 Average is: 62
Length of plot in ft 37 Breadth of plot in ft 3
Length of plot in m 3.0833333333333335 Breadth of plot in m 0.25
Area in metre sq For Plot No0is0.7708333333333334
Length of plot in ft 35 Breadth of plot in ft 68
Length of plot in m 2.9166666666666665 Breadth of plot in m 5.666666666666667
Area in metre sq For Plot No1is16.52777777777778
Length of plot in ft 52 Breadth of plot in ft 45
Length of plot in m 4.333333333333333 Breadth of plot in m 3.75
Area in metre sq For Plot No2is16.25
Length of plot in ft 6 Breadth of plot in ft 59
Length of plot in m 0.5 Breadth of plot in m 4.916666666666667
Area in metre sq For Plot No3is2.4583333333333335
Length of plot in ft 18 Breadth of plot in ft 97
Length of plot in m 1.5 Breadth of plot in m 8.083333333333334
Area in metre sq For Plot No4is12.125
Length of plot in ft 65 Breadth of plot in ft 41
Length of plot in m 5.416666666666667 Breadth of plot in m 3.4166666666666665
Area in metre sq For Plot No5is18.506944444444446
Length of plot in ft 55 Breadth of plot in ft 59
Length of plot in m 4.583333333333333 Breadth of plot in m 4.916666666666667
Area in metre sq For Plot No6is22.53472222222222
Length of plot in ft 23 Breadth of plot in ft 93
Length of plot in m 1.9166666666666667 Breadth of plot in m 7.75
Area in metre sq For Plot No7is14.854166666666668
Length of plot in ft 62 Breadth of plot in ft 40
Length of plot in m 5.166666666666667 Breadth of plot in m 3.3333333333333335
Area in metre sq For Plot No8is17.222222222222225
Length of plot in ft 76 Breadth of plot in ft 23
Length of plot in m 6.333333333333333 Breadth of plot in m 1.9166666666666667
Area in metre sq For Plot No9is12.13888888888889
Length of plot in ft 39 Breadth of plot in ft 92
Length of plot in m 3.25 Breadth of plot in m 7.666666666666667
Area in metre sq For Plot No10is24.916666666666668
Length of plot in ft 52 Breadth of plot in ft 87
Length of plot in m 4.333333333333333 Breadth of plot in m 7.25
Area in metre sq For Plot No11is31.416666666666664
Length of plot in ft 18 Breadth of plot in ft 26
Length of plot in m 1.5 Breadth of plot in m 2.1666666666666665
Area in metre sq For Plot No12is3.25
Length of plot in ft 32 Breadth of plot in ft 98
Length of plot in m 2.6666666666666665 Breadth of plot in m 8.166666666666666
Area in metre sq For Plot No13is21.777777777777775
Length of plot in ft 66 Breadth of plot in ft 52
Length of plot in m 5.5 Breadth of plot in m 4.333333333333333
Area in metre sq For Plot No14is23.833333333333332
Length of plot in ft 97 Breadth of plot in ft 83
Length of plot in m 8.083333333333334 Breadth of plot in m 6.916666666666667
Area in metre sq For Plot No15is55.90972222222223
Length of plot in ft 49 Breadth of plot in ft 18
Length of plot in m 4.083333333333333 Breadth of plot in m 1.5
Area in metre sq For Plot No16is6.125
Length of plot in ft 81 Breadth of plot in ft 15
Length of plot in m 6.75 Breadth of plot in m 1.25
Area in metre sq For Plot No17is8.4375
Length of plot in ft 32 Breadth of plot in ft 10
Length of plot in m 2.6666666666666665 Breadth of plot in m 0.8333333333333334
Area in metre sq For Plot No18is2.2222222222222223
Length of plot in ft 82 Breadth of plot in ft 63
Length of plot in m 6.833333333333333 Breadth of plot in m 5.25
Area in metre sq For Plot No19is35.875
Length of plot in ft 3 Breadth of plot in ft 70
Length of plot in m 0.25 Breadth of plot in m 5.833333333333333
Area in metre sq For Plot No20is1.4583333333333333
Length of plot in ft 5 Breadth of plot in ft 95
Length of plot in m 0.4166666666666667 Breadth of plot in m 7.916666666666667
Area in metre sq For Plot No21is3.298611111111111
Length of plot in ft 91 Breadth of plot in ft 25
Length of plot in m 7.583333333333333 Breadth of plot in m 2.0833333333333335
Area in metre sq For Plot No22is15.798611111111112
Length of plot in ft 49 Breadth of plot in ft 7
Length of plot in m 4.083333333333333 Breadth of plot in m 0.5833333333333334
Area in metre sq For Plot No23is2.3819444444444446
Length of plot in ft 9 Breadth of plot in ft 31
Length of plot in m 0.75 Breadth of plot in m 2.5833333333333335
Area in metre sq For Plot No24is1.9375
*/