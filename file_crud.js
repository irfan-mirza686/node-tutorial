const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is as simple text file for crud');

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log('file is updated');
// });

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file name is renamed');
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);