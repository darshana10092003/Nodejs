const {readFile} = require('fs').promises;

async function readMyFile(filepath){
    try{
        const data=await readFile(filepath, 'utf-8');
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

readMyFile('data.txt');


//SYNCHRONOUS FILE HANDLING

// const fs=require('fs');

// try{
//     const data=fs.readFileSync('data.txt', 'utf-8');
//     console.log(data);
// }catch(err){
//     console.log(err);
// }


const path=require('path');

const fullPath=path.join(__dirname, 'data.txt');
console.log(fullPath);

const normalizedJoin=path.join(__dirname, '..', 'data.txt');
console.log(normalizedJoin);

console.log(path.resolve('data.txt'));

const filename=path.basename(__filename);
console.log(filename);

// const name=path.basename(__filename, '.js');
// console.log(name);



const os=require('os');

console.log(`platform ${os.platform()}`);
console.log(`Home directory ${os.homedir()}`);
console.log(`Host name ${os.hostname()}`);
console.log(`architecture: ${os.arch()}`); 
console.log(`OS Type: ${os.type()}`); 


const util=require('util');
const name="gungun";
console.log(util.format("Hello %s", name));