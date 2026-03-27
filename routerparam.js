const express=require("express");
const app=express();

app.get('/user/:name/:age/:email', (req,res)=>{
    const {name, age, email}=req.params;
    res.send(`hello ${name}, age ${age}, email- ${email}`);
});

app.listen(3007,()=>{
    console.log("server is running on port 3007");
})