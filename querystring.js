const express=require('express');
const app=express();

app.get('/search', (req,res)=>{
    const name=req.query.name;
    const age=req.query.age;
    res.send(`hello ${name}, age ${age}`);
});

app.listen(3006,()=>{
    console.log("server is running on port 3006");
})