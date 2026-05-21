const express = require("express")

const app = express()

app.use("/route",(req , res , next)=>{
    console.log("first req");
    
    next()
},(req,res,next)=>{
    console.log("second req");
    next();
},(req,res)=>{
    res.send("third request") 
})

app.use((req,res)=>{
    res.status(404).send("please check the route ")
})

app.listen(3000 , ()=>{
    console.log("server is listening to the PORT:3000");
})