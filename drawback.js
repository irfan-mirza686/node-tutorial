// asynchronous drawback

let a=10;
let b=0;

// setTimeout(()=>{
//     b=20;
// },2000); // it will not calculate 

//// Now Resolve this issue with Promise ...
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000);
})

waitingData.then((data)=>{
    console.log(a+data)
})

console.log(a+b);