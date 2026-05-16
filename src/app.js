const express = require("express")

const app = express()


app.use("/login" , (req , res)=>{
    res.send("Hello this is Login section")
})

app.use("/browse" , (req , res)=>{
    res.send("Hello this is browse section")
})

app.get("/" , (req , res)=>{
    res.send("Hello users this is home section")
})

app.use((req , res)=>{
    res.status(404).send("Page Not Found")
})


app.listen(3000 , ()=>{
    console.log("Server is listening in port : 3000");
})
