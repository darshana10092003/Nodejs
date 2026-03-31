// const {writeFile}= require('fs').promises;

// async function writeToFile(filename,data){
//     try{
//         await writeFile(filename,data,'utf-8');
//         console.log("file written successfully");
//     }catch(err){
//         console.log(err);
//     }
// }

// writeToFile('data.txt','Hello! This is Node.js file handling.');



//APPENDING TO A FILE

const {appendFile}= require('fs').promises;

async function appendToFile(filename,data){
    try{
        await appendFile(filename,data,'utf-8');
        console.log("file appended successfully");
    }catch(err){
        console.log("error appending data:", err);
    }
}

appendToFile('data.txt','\nThis is a new line of text.')



const fs=require('fs');

try{
    fs.writeFileSync('data.txt','Hello, synchronous file handling', 'utf-8');
    console.log("file written successfully");
}catch(err){
    console.log(err);
}