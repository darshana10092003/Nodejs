// const express=require ('express');
// const app=express();


//without middleware

// app.get('/home',(req,res)=>{
//     console.log("request received");
//     res.send("home page");
// })

// app.get("/about",(req,res)=>{
//     console.log("request received");
//     res.send("about page");
// })


//with middleware 

// app.use((req,res,next)=>{
//     console.log("request received");
//     next();
// });

// app.get('/homee',(req,res)=>{
//     res.send("Homeeee");
// })

// app.get('/aboutt',(req,res)=>{
//     res.send("Abouttt")
// })


//custom middlware

// function myMiddleware(req,res,next){
//     console.log("request came");
//     next();
// }

// app.use(myMiddleware);
// app.get('/middleware',(req,res)=>{
//     res.send("HOME PAGE");
// })


// function checkLogin(req,res,next){
//     const isLoggedIn=false;

//     if(!isLoggedIn){
//         return res.send("please login first");
//     }
//     next();
// }

// app.get('/dashboard',checkLogin,(req,res)=>{
//      res.send("welcome to dashboard");
// })

// app.listen(4001,()=>{
//     console.log("server is running on port 4001");
// })


// module.exports=function(req,res,next){
//     const timestamp=new Date().toISOString();
//     console.log(`[${timestamp}] ${req.method} ${req.url}`);
//     next();
// }

const express=require('express');
const app=express();

//CUSTOM MIDDLEWARE
const myMiddleware=(req,res,next)=>{
    console.log("custom myMiddleware executed");
    next();
}

app.use(myMiddleware);

app.get('/',(req,res)=>{
    res.send("home page");
})

app.listen(3000);