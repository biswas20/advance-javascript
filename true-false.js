// Falsy values
// 0, "" , undefined , null ,NaN,false

//Truthy values
// "0"," "

let myName;
console.log(myName);
if(myName){
    console.log("Condition Is True");
}
else{
    console.log("Condition Is False");
}
let obj={};
if(obj){
    console.log("True");
}
else{
    console.log("False");
}
let array=[];
if(array){
    console.log("Condition Is Truthy Values");
}
else{
    console.log("Condition Is Falsy values");
}