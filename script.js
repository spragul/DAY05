//qustion 1:Anonymous
//a. Print odd numbers in an array
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let array=[]; 
const odd=function(){
for(let i in numbers){
  if(numbers[i]%2==1){
    array.push(numbers[i]);
  }
}
console.log(array.join(' '));
}
odd();
//output:
//1 3 5 7 9 11 13 15

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// //b.Convert all the strings to title caps in a string array
// let string=['MY NAME IS RAGUL'];
// let strings=string[0].toLowerCase().split(' ');
// let titlecase=function(){
//  for(let i=0;i<strings.length;i++){
//    strings[i]=strings[i].charAt(0).toLocaleUpperCase()+strings[i].slice(1);
//   }
//  console.log(strings.join(' '));
// }
// titlecase();
// //output:
// //My Name Is Ragul

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// //c. Sum of all numbers in array
// let numbers=[1,2,3,4,5,61,74,89,9,101,11,12,103,14,150];
// const addNumber=function(){
//   let sum=0;
//    for(let i in numbers){
//      sum=sum+numbers[i];
//   }
//   console.log(sum);
// }
// addNumber();
// //output:
// //639

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// // d. REturn all the prim numbers in an array
// let numbres=[3,4,5,6,7,13,31,44,55,79,59,1425];
// let array=[];
// let primNumber=function(){
//   for(let i=1;i<=numbres.length;i++){ 
//     let s=0;
//      for(factor=1;factor<=numbres[i];factor++){
//        if(numbres[i]%factor==0){
//         s++;
//       }
//     }
//    if(s==2){
//      array.push(numbres[i]); 
//     }
//   }
//   return array;
// }
// console.log( primNumber());
// //output
// //(6) [5, 7, 13, 31, 79, 59]

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// //e.Return all the polindrom in array in an array
// let string=['dad','anna','ragul','pop','cool','refer'];
// let array=[];
// let polindrom=function(){
//   for(let i=0;i<string.length;i++){
//     let a=string[i];
//     let original=string[i];
//     let line='';
//     for(let j=a.length-1;j>=0;j--){
//       line+=a[j];
//     }
//     if(original==line){
//       array.push(original);
//     }

//   }
//   return array;
// }
// console.log(polindrom());
// //output
// //(4) ['dad', 'anna', 'pop', 'refer']

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// //f. Return median of two sorted arrays of the same size
// let a=[1,9,7,4,6];
// let b=[5,3,8,2,10];
// let median=function(){
// let c=a.concat(b);
// c.sort((a,b)=>a-b);
// n=c.length/2;
// return ((c[n-1]+c[n])/2)
// };
// console.log(median());
// //output:
// //5.5

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// //g.Remove duplicates from an array
// let a=[1,2,3,4,5,2,3,4];
// let duplicates=function(){
// for(let i=0;i<a.length;i++){
//   for(let j=i+1;j<a.length;j++){
//     if(a[i]==a[j]){
//       a.splice(j, 1);
//     }
//   }
// }
// console.log(a);
// }
// duplicates();
// //output:
// //(5) [1, 2, 3, 4, 5]

//----------------------------------------------------------------------------------------------

// //Qustion 1:Anonymous
// //h.Rotate an array by k times
// let numbers=[1,2,3,4,5];
// let k=3;
// let rotate=function(){
//   for(let i=1;i<=k;i++){
//     let a=numbers.shift();
//     numbers.push(a);
//   }
//   console.log(numbers);
// }
// rotate();
// //output:
// //(5) [4, 5, 1, 2, 3]

//----------------------------------------------------------------------------------------------

// // //Qustion 1:IIFE
// //a. Print odd numbers in an array
// let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let array=[]; 
// (function () {
//  for(let i in numbers){
//   if(numbers[i]%2==1){
//     array.push(numbers[i]);
//   }
//  }
//  console.log(array.join(' '));
// })();
// //output:
// //1 3 5 7 9 11 13 15

//----------------------------------------------------------------------------------------------

// //Qustion 1:IIFE
// //b.Convert all the strings to title caps in a string array
// let string=['MY NAME IS RAGUL'];
// let strings=string[0].toLowerCase().split(' ');
// (function(){
//  for(let i=0;i<strings.length;i++){
//    strings[i]=strings[i].charAt(0).toLocaleUpperCase()+strings[i].slice(1);
//   }
//  console.log(strings.join(' '));
// })();
// //output:
// //My Name Is Ragul

//----------------------------------------------------------------------------------------------

// //Qustion 1:IIFE
// //c. Sum of all numbers in array
// let numbers=[1,2,3,4,5,61,74,89,9,101,11,12,103,14,150];
// (function(){
//   let sum=0;
//    for(let i in numbers){
//      sum=sum+numbers[i];
//   }
//   console.log(sum);
// })();
// //output:
// //639

//----------------------------------------------------------------------------------------------


// //Qustion 1:IIFE
// // d. Return all the prim numbers in an array
// let numbres=[3,4,5,6,7,13,31,44,55,79,59,1425];
// let array=[];
// (function(){
//   for(let i=1;i<=numbres.length;i++){ 
//     let s=0;
//      for(factor=1;factor<=numbres[i];factor++){
//        if(numbres[i]%factor==0){
//         s++;
//       }
//     }
//    if(s==2){
//      array.push(numbres[i]); 
//     }
//   }
//   console.log(array);
// })();
// //output
// //(6) [5, 7, 13, 31, 79, 59]

//----------------------------------------------------------------------------------------------


// //Qustion 1:IIFE
// //e.Return all the polindrom in array in an array
// let string=['dad','anna','ragul','pop','cool','refer'];
// let array=[];
// (function(){
//   for(let i=0;i<string.length;i++){
//     let a=string[i];
//     let original=string[i];
//     let line='';
//     for(let j=a.length-1;j>=0;j--){
//       line+=a[j];
//     }
//     if(original==line){
//       array.push(original);
//     }
//   }
//   console.log(array);
// })();
// //output
// //(4) ['dad', 'anna', 'pop', 'refer']

//----------------------------------------------------------------------------------------------

// //Qustion 1:IIFE
// //f. Return median of two sorted arrays of the same size
// let a=[1,9,7,4,6];
// let b=[5,3,8,2,10];
// (function(){
// let c=a.concat(b);
// c.sort((a,b)=>a-b);
// n=c.length/2;
// console.log((c[n-1]+c[n])/2)
// })();
// //output:
// //5.5

//----------------------------------------------------------------------------------------------
// //Qustion 1:IIFE
// //g.Remove duplicates from an array
// let a=[1,2,3,4,5,2,3,4];
// (function(){
// for(let i=0;i<a.length;i++){
//   for(let j=i+1;j<a.length;j++){
//     if(a[i]==a[j]){
//       a.splice(j, 1);
//     }
//   }
// }
// console.log(a);
// })();
// //output:
// //(5) [1, 2, 3, 4, 5]

//----------------------------------------------------------------------------------------------

// //Qustion 1:IIFE
// //h.Rotate an array by k times
// let numbers=[1,2,3,4,5];
// let k=3;
// (function(){
//   for(let i=1;i<=k;i++){
//     let a=numbers.shift();
//     numbers.push(a);
//   }
//   console.log(numbers);
// })();
// //output:
// //(5) [4, 5, 1, 2, 3]

//----------------------------------------------------------------------------------------------

// //Qustion 3:arrow function
// //a. Print odd numbers in an array
// let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let array=[]; 
// const odd=(number)=>{
// for(let i in numbers){
//   if(numbers[i]%2==1){
//     array.push(numbers[i]);
//   }
// }
// return array;
// }
// console.log(odd());
// //output:
// //(8) [1, 3, 5, 7, 9, 11, 13, 15]

//----------------------------------------------------------------------------------------------

// //Qustion 3:arrow function
// //b. convert all the strings title caps in a string array
// let string=['MY NAME IS RAGUL'];
// let strings=string[0].toLowerCase().split(' ');
// let titlecase=(string)=>{
//  for(let i=0;i<strings.length;i++){
//    strings[i]=strings[i].charAt(0).toLocaleUpperCase()+strings[i].slice(1);
//   }
//  console.log(strings.join(' '));
// }
// titlecase();
// //output:
// //My Name Is Ragul

//----------------------------------------------------------------------------------------------


// //Qustion 3:arrow function
// //c. Sum of all numbers in array
// let numbers=[1,2,3,4,5,61,74,89,9,101,11,12,103,14,150];
// const addNumber=(number)=>{
//   let sum=0;
//    for(let i in numbers){
//      sum=sum+numbers[i];
//   }
//   console.log(sum);
// }
// addNumber();
// //output:
// //639

//----------------------------------------------------------------------------------------------

// //Qustion 3:arrow function
// // d. REturn all the prim numbers in an array
// let numbres=[3,4,5,6,7,13,31,44,55,79,59,1425];
// let array=[];
// let primNumber=(number)=>{
//   for(let i=1;i<=numbres.length;i++){ 
//     let s=0;
//      for(factor=1;factor<=numbres[i];factor++){
//        if(numbres[i]%factor==0){
//         s++;
//       }
//     }
//    if(s==2){
//      array.push(numbres[i]); 
//     }
//   }
//   return array;
// }
// console.log( primNumber());
// // output
// // (6) [5, 7, 13, 31, 79, 59]

//----------------------------------------------------------------------------------------------

// //Qustion 3:arrow function
// //e.Return all the polindrom in array in an array
// let string=['dad','anna','ragul','pop','cool','refer'];
// let array=[];
// let polindrom=(str)=>{
//   for(let i=0;i<string.length;i++){
//     let a=string[i];
//     let original=string[i];
//     let line='';
//     for(let j=a.length-1;j>=0;j--){
//       line+=a[j];
//     }
//     if(original==line){
//       array.push(original);
//     }
//   }
//   return array;
// }
// console.log(polindrom());
// //output
// //(4) ['dad', 'anna', 'pop', 'refer']

//----------------------------------------------------------------------------------------------