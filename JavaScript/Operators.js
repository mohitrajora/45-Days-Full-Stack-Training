//------------------------ Oprators in JS ----------------------------------


// let num1 = "20";
// let num2 = 20;
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(num1 == num2);
// console.log(num1 === num2);

// let num3 = "true";
// let num4 = true;   // true = 1
// console.log(num3 == num4);

// let num3 = "false";
// let num4 = 0;                     
// console.log(num3 == num4);

// let num3 = 10;
// let num4 = 20;                     
// console.log(num3 < num4);

// logical op

// let num3 = 0;
// let num4 = 20;        // -ve numbers => true       zero numbers => false     
// console.log(!num3);  // +ve numbers => true

// let num3 = "hello";
// console.log(!num3);      // string => true

// let num3 = " ";
// console.log(!num3); 

// let num3 = "";            // empty string => false
// console.log(!num3); 

// let num3 = true;
// console.log(!num3) 

// let arr = [];                   // blank array => true
// // console.log(arr.length);
// if(arr){
//     console.log("yes");
// }
// else {
//     console.log("no");
// }
// console.log(!arr);

// let obj = {};                    // blank obj => true
// console.log(!obj);

// let num1 = 10;
// let num2 = 20;
// console.log(num1+!!num2);    // 10+0=10

// let num1 = 10;
// let num2 = 20;
// num1 += !num2;
// console.log(num1);

// let num12 = 10;
// let num13 = 20;
// console.log(num12 && num13);

// let num2 = 10;
// let num3 = 20;
// console.log(num2 || num3);

// let num12 = "";
// let num13 = 20;
// console.log(num12 && num13);

// let num12 = 100;
// let num13 = [];
// console.log(num12 && num13);

// let num12 = 100;
// let num13 = [];
// console.log(num12 && !num13);

// let num12 = 0;
// let num13 = [];
// console.log(num12 || !(num13 && num13));

// let num12 = 10;
// console.log(num12++);
// console.log(num12);

// let num1 = 10;
// console.log(++num1);
// console.log(num1);

// let num1 = 10;
// console.log(--num1);
// console.log(num1);

// let num12 = 10;
// console.log(num12--);
// console.log(num12);

// let num12 = 3;
// let num13 = 5;
// let result = num12++ + num13++ % num12;  // 3 + 5 % 4
// console.log(result);

// let num14 = 5.5;
// let num15 = 3;
// let result = num14++ + ++num15
// console.log(result);

// let num16 = true;
// let num17 = true;
// let result = num16++ + num17++ + --num16;
// console.log(result);

// let num16 = true;
// let num17 = 0;
// let result = num16++ + num17++ && num16 || num17;
// console.log(result);


// -------------------------- tarnary op -------------------------------

// (condition)?"True part":"False part"

// let num1 = 0;
// let result = (num1)?"yes":"no";
// console.log(result);

// let num2 = 10;
// let num3 = 20;
// let result = (num2 > num3)?num2:num3;
// console.log(result);

// let a = 10;
// let b = 20;
// let c = 30;
// // let result = ((a>b && a>c) || (b>c && b>a) || (c>a && c>b))?
// let result = (a>b && a>c)?"a":(b>c)?"b":"c";
// console.log(result);

// let num3 = 10;
// if(num3){
//     console.log("yes");
// }

// let num4 = 20;
// if(num4){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

// let num5 = 200;
// if(num5) console.log("yes");
// else console.log("no");

// let num = 0;
// // if(/*num>0 || num<0*/ num!==0){
// //     console.log("False");
// // }
// if(num){
//     console.log("false");
// }

// let a = "";
// if(a){
//     console.log(!a);
// }
// else{
//     console.log("true");
// }

// let age = 18;
// if(age >= 18){
//     console.log("Vote For MODI!!!");
// }
// else{
//     console.log("Vote For Sbko");
// }

// let count = 0;
// let number = -6;
// if (number) {
//     count++;
// }
// else {
//     count--;
// }
// console.log(count);

// let userName = "hello";
// let login = true;
// let status = "active";

// if (userName == "hello") {
//     if (status == "active") {
//         console.log(login);
//     }
// }
// else {
//     login = false;
//     console.log(login);
// }

// ---------------------- Switch Case ------------------------

// let choice = "a";
// switch (choice) {
//     case "a":
//         console.log("First");
//         break;
//     case "b":
//         console.log("Second");
//         break;
    
//     default:
//         console.log("Default ");
//         break;
// }

// let choice = true;
// switch (choice) {
//     case "true":
//         console.log("First");
//         break;
//     case "true":
//         console.log("Second");
//         break;
    
//     default:
//         console.log("Default ");
//         break;
// }

// let choice = "positive";
// switch (choice) {
//     case -10:
//         console.log("First");
//         break;
//     case "b":
//         console.log("Second");
//         break;
    
//     default:
//         console.log("Default ");
//         break;
// }

let choice = [];
switch (choice) {
    case []:
        console.log("First");
        break;
    case "[]":
        console.log("Second");
        break;
    case true:
        console.log("third");
        break;
    case false:
        console.log("four");
        break;
    default:
        console.log("Default");
        break;
}