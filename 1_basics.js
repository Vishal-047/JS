// let name="Vishal"
// let age=22;
// const college="ABC college";

// name="Vishal Singh"
// age=25;
// // college=false; // This will give error because college is a constant variable

// console.table([name,age,college]); //This will give the output in table format....


// console.table([name.charAt(2),college.indexOf('o')]);

// //TO RUN THIS FILE USE THE COMMAND: node js2/1_basics.js IN THE TERMINAL

// let a="1"+2
// let b="1"+"2"
// let c="1"+2+3
// let d=1+4+"3" 

// console.table([a,b,c,d]);
// console.table([typeof a,typeof b,typeof c,typeof d]);

// ************************************************************************************************************************

// //Return type of variables in JavaScript

// // 1) Primitive Datatypes
// //        Number => number
// //        String  => string
// //        Boolean  => boolean
// //        null  => object
// //        undefined  =>  undefined
// //        Symbol  =>  symbol
// //        BigInt  =>  bigint

// // 2) Non-primitive Datatypes
// //        Arrays  =>  object
// //        Function  =>  function
// //        Object  =>  object

// ************************************************************************************************************************

// let string1="      hello      "
// let str2=string1.trim(); // removes the extra spaces from start and end....

// let str3="Hello world, welcome to JavaScript"
// console.log(str3.length);
// let str4=str3.substring(0,9);
// let str5=str3.slice(-33,-25); // same as substring but can take negative indexing....   
// let str6=str3.slice(0,9);

// console.table([string1,str2,str3,str4,str5,str6]);

// console.log(`Hello, my name is ${name}, my age is ${age}, and I am from ${college}`);


// ************************************************************************************************************************
// let min=10;
// let max=20;
// console.log(Math.floor(Math.random()*(max-min+1))+min); //Give the output between 10 to 20...
// console.log(Math.ceil(4.2)); //output will be 5....
// console.log(Math.floor(4.8)); //output will be 4....
// console.log(Math.random()); //Gives output between 0 and 1....

// ***********************************************************************************************************************

let date=new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.setUTCFullYear());

let createdate=new Date(2000,0,25,55,28,65); 
console.log(createdate.toLocaleString());

//*******************************************Arrays*********************************************

const arr1=[1,2,3,4,5]
const arr2=[0,9,8,7,6]
// arr1.push(arr2) //create another array inside an array.....
console.log(arr1);

const arr3=arr1.concat(arr2)  // create a new array by concatinating the 2 array.....
console.log(arr3)

//*******OR********

const arr4=[...arr1,...arr2] //Spreading each element of the array...
console.log(arr4)