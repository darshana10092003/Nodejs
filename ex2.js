const express=require("express");
const app=express();

app.use(express.json());

//database

let products=[
    {id:1, name:"Phone", price:10000},
    {id:2, name:"Laptop", price:50000}
];

let idCounter=3;

app.post('/products',(req,res)=>{
    const {name, price}=req.body;

    const newproduct={
        id:idCounter++,
        name,
        price
    };

    products.push(newproduct);

    res.status(201).json(newproduct);
});

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/:id',(req,res)=>{
    const product=products.find(p=> p.id === Number(req.params.id));

    if(!product){
        return res.status(404).send("Product not found");
    }
    res.json(product);
});

app.put('/products/:id', (req,res)=>{
    const product=products.find(p=>p.id ===Number(req.params.id));

    if(!product){
        return res.status(404).send("Product not found");
    }
    product.name=req.body.name;
    product.price=req.body.price;

    res.json(product);
});

app.delete('/products/:id', (req,res)=>{
    const index=products.findIndex(p=>p.id == Number(req.params.id));

    if(index === -1){
        return res.status(404).send("product not found");
    }

    const deleted= products.splice(index,1);

    res.json(deleted);
})

app.listen(4002,()=>{
    console.log("server is running on port 4000");
})