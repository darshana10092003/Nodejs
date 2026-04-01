// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   throw new Error("Something went wrong!");
// });

// //custom error handling

// app.use((err, req, res, next)=>{
//     console.log(err);
//     res.status(500).json({message:"Oops! something went wrong"});
// });

// app.listen(3008, () => {
//   console.log("Server running on port 3008");
// });


const express = require("express");
const app = express();


//route
app.get("/error",(req,res,next)=>{
  const err=new Error("something went wrong");
  next(err);
});

app.get('/user',(req,res,next)=>{
  const user =null;

  if(!user){
    const err=new Error("user not found");
    err.status=404;
    return next(err);
  }
})

//error middleware
app.use((err,req,res,next)=>{
  console.log(err.message);
  res.status(500).send("Internal server error");
})

app.listen(3008, () => {
  console.log("Server running on port 3008");
});