let numsArray=[1,2,3,4,5,6,7,8,9];
for(let i=0; i < numsArray.length; i++){
  let element=numsArray[i];
  console.log(element);
    if(element>=6){
        break;
    }
}
let num=[2,3,4];
let map=num.map(x=>x*x)