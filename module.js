// function add(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }
// module.exports={
//     add,
//     subtract,
//     multiply,
//     divide
// };



const express = require("express");
const app = express();

const userroutes=require('./router/routes');
app.use('/user', userroutes);

app.listen(3005,()=>{
    console.log("server is running on port 3000");
});