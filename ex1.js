// const express=require('express');
// const app=express();

// app.use(express.json());

// let user={id:1, name:"darshana",mobile:79986578, age:22};

// app.get('/user',(req,res)=>{
//     res.status(200).send(user);
// });

// app.post('/user',(req,res)=>{
//     user=req.body;
//     res.status(200).send("user created successfully");
// });


// app.put('/user',(req,res)=>{
//      user=req.body;
//     res.status(200).send("user updated successfull");
// })

// app.delete('/user',(req,res)=>{
//     user={};
//     res.status(200).send("user deleted successfully");
// });

// app.listen(3009,()=>{
//     console.log("server is running on port 3009");
// });



//exercise 2

const express=require('express');
const app=express();

app.use(express.json());

// let user=[
//     {id:1,name:"ravi", age:23},
//     {id:2,name:"suresh", age:24}
// ];

app.get('/user/:id/:name', (req,res,next)=>{
   const name=req.params.name;
   const id=req.params.id;
   res.send(`hello User id is ${id} and name is ${name}`);
});


//query
app.get('/user', (req,res)=>{
    const address=req.query.address;
    res.send(`address- ${address}`);
})

//custom error

// app.get("/", (req, res) => {
//   throw new Error("Something went wrong!");
// });

// app.use((err, req, res, next)=>{
//     console.log(err);
//     res.status(500).json({message:"Oops! something went wrong"});
// });

// function errorHandler(err,req,res,next){
//     res.status(500).send("Something went wrong!!");
// }

// app.use(errorHandler);
app.get('/test',(req,res,next)=>{
    next(new Error("oops!"));
});


app.use((err,req,res,next)=>{
 console.log(err);
 res.status(500).send("Something went wrong");
});

app.listen(4000,()=>{
    console.log("server is running on port 4000");
});