// const express=require('express');// const app=express();

// app.use(express.json());


// //routes
// app.get('/', (req,res)=>{
//     res.send("welcome to express.js file ");
// });
// app.post('/submit', (req,res)=>{
//     const name=req.body.name;
//     res.status(200).send(`hello ${name}, your data has been submitted successfully!`)
// })

// //app.get("/data", (req,res)=>{
//     // res.set('content-type','text/html');
//     // res.status(200).send("<h1><i>hello darshana!!!</i></h1>");

//     // res.set('content-type', 'application/json');
//     // res.status(200).send({message:"data fetched successfully"});

//     // res.set('content-type', 'text/plain');
//     // res.send('Hello Darshana');

//     // res.set('content-type', 'application/json');
//     //res.status(404).send('Page not found');

//     //res.status(500).send('Internal Server Error');
// // })

// //server start
// app.listen(3001,(error)=>{
//     if(!error){
//     console.log("server is running on port 3000");
//     }else{
//     console.log("Error occurred: ", error);
//     }
// });




const express=require('express');
const app=express();

//middleware
app.use(express.json());

//sample data
let user={name:"darshana",age:25,address:"123 Main St"};


//post 
// app.post('/submit',(req,res)=>{
//     const name=req.body.name;
//     const age=req.body.age;
//     res.status(200).send(`hello ${name}, your data and age ${age},  has been submitted successfully!`)
// });

//APPLICATION LEVEL MIDDLEWARE

// app.use((req,res,next)=>{
//     console.log("Runs for all routes");
//     next();
// })

//ROUTE LEVEL MIDDLEWARE
// app.get("/user", (req, res,next)=>{
//     console.log("Route middleware");
//     next();
// },(req,res)=>{
//     res.send("user page");
// })


// app.get('/user/:name', (req,res)=>{
//     res.send(`hello ${req.params.name}`);
// })

app.get('/user', (req,res)=>{
    res.send(user);
})

app.post('/user', (req,res)=>{
    user=req.body;
    res.send("user created successfully");
})

app.put('/user',(req,res)=>{
    user=req.body;
    res.send("user updated successfully");
})

app.delete("/user",(req,res)=>{
    user={};
    res.send("user deleted successfully");
})

app.patch('/user', (req,res)=>{
    Object.assign(user,req.body);
    res.send("user updated partially");
})

//start server
app.listen(3001,()=>{
    console.log("server started");
})