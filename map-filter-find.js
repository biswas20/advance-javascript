let numArray=[3,5,7,9,4,6,8];
let numMap=numArray.map(function(num){
    return num*num;
});
console.log(numMap);
let numFilter=numArray.filter(function(x){
    return x>5;
});

console.log(numFilter);

let numFind=numArray.find(function(element){
    return element%2==0;
});
console.log(numFind);