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