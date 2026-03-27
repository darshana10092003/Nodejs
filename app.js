// const add =require('./module');

// console.log(add(2,3));

// exports.add=(a,b)=>a+b;


// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet', () => {
//   console.log('Hello user');
// });

// emitter.emit('greet');


// Import modules




const fs = require("fs");
const path = require("path");
const os = require("os");

// 1️ Create a file path
const filePath = path.join(__dirname, "data.txt");

console.log("Full Path:", filePath);

// 2️ Write to file
const content = "Hello! This is Node.js file handling.";

fs.writeFileSync(filePath, content);
console.log("File written successfully!");

// 3️ Read file
const data = fs.readFileSync(filePath, "utf8");
console.log("File Content:", data);

// 4️ Append more data
fs.appendFileSync(filePath, "\nAppended line.");
console.log("Content appended!");

// 5️ File path info
console.log("File Name:", path.basename(filePath));
console.log("Directory:", path.dirname(filePath));
console.log("Extension:", path.extname(filePath));

// 6️ OS Information
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());


const math=require('./module');

//use functions 
console.log("addition:", math.add(5,3));
console.log("subraction:", math.subtract(5,3));
console.log("multiplication:", math.multiply(5,3));
console.log("division:", math.divide(5,3));

// const fs=require('fs');
// const path=require('path');
// const os=require('os');


const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("Hello Darshana!!!");
    res.end();
});

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});


const http1=require('http');
const server1=http1.createServer((req,res)=>{

    // if req is GET
    if(req.method === 'GET' && req.url === '/'){
        //res.end("hello.! this is a GET request.")
        res.setHeader('Content-Type', 'application/json');

        const data={
            name:"Darshana",
            age:25,
            address:"123 Main St",
            mail:"i4Aqo@example.com"
        };
        res.end(JSON.stringify(data));
    }

    // if request is POST
    else if(req.method ==='POST' && req.url === '/data'){
        res.end("hello.! this is a POST request. data received.")
    }
});

server1.listen(3001,()=>{
    console.log("server is running on 3001 port")
})


