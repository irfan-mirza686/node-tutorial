const app = require('./app');
const fs = require('fs');
const chalk = require('chalk');
// const fs = require('fs').writeFileSync; //import specific function directly

// console.warn(app.z());

let arr=[2,3,5,4,9,6,8,1,3];
let result = arr.filter((item)=>{
    return item===3;
})
// console.log(__filename)
// fs.writeFileSync("hello.txt","Irfan Mirza");

console.log(chalk.blue('Hello world!'));