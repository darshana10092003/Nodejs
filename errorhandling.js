const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Something went wrong!");
});

//custom error handling

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({message:"Oops! something went wrong"});
});

app.listen(3008, () => {
  console.log("Server running on port 3008");
});