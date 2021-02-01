let students=[
    {id:4,sName:"Tamal Biswas"},
    {id:8,sName:"Tonmoy Roy"},
    {id:22,sName:"Tanmay Nath"},
    {id:15,sName:"Pranto Saha"},
    {id:18,sName:"Jhanker Mahabub"}
];

let nameArray=students.map((s=>s.sName));
let idArray=students.map((id=>id.id));
console.log(idArray);
// let friendsArray=[];
// // for(let i=0;i<students.length;i++){
// //     let nameArray=students[i].sName;
// //     friendsArray.push(nameArray);
// // }
console.log(nameArray);