// const express=require('express');
// const app=express();

// const router=express.Router();

// //single routing
// router.route('/user')
// .get((req,res,next)=>{
//     console.log("get request called");
//     res.end();
// })
// .post((req,res,next)=>{
//     console.log("post request called");
//     res.end();
// })
// .put((req,res,next)=>{
//     console.log("PUT request called");
//         res.end();
// })
// app.use(router);

// app.listen(3002,()=>{
//     console.log("server is running on port 3002");
// });


const express=require('express');
const router =express.Router();

router.get('/',(req,res)=>{
    res.send("get all user");
});

router.post('/', (req,res)=>{
    res.send("create a user");
});

module.exports=router;