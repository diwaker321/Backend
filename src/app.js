// const express = require("express")

// const app = express()

// app.use("/login" , (req , res)=>{
//     res.send("Hello this is Login section")
// })

// app.use("/browse" , (req , res)=>{
//     res.send("Hello this is browse section")
// })

// app.get("/" , (req , res)=>{
//     res.send("Hello users this is home section")
// })

// app.use((req , res)=>{
//     res.status(404).send("Page Not Found")
// })

// app.listen(3000 , ()=>{
//     console.log("Server is listening in port : 3000");
// })

// const express = require("express")
// const app = express()

// app.get("/",(req , res)=>{
//     res.send("This is home page")
// })

// app.get("/about" , (req, res)=>{
//     res.send("this is about section page")
// })

// app.use("/signin/:username/:password" , (req , res)=>{
//     console.log('req: ', req.params);
//     res.send("this is sign in page ")
// })

// app.get("/signout" , (req, res)=>{
//     res.send("this is sign out page")
// })

// // app.use("/signout" , (req, res)=>{
// //     res.send("this is the use  sign out page")
// // })
// app.post("/signout" , (req , res)=>{
//     res.send("this is the post api of signout")
// })
// app.use((req ,res)=>{
//     res.status(404).send("Please check your route")
// })

// app.listen(7000 , ()=>{
//     console.log("server is listening to port :7000");

// })

//real app start

const express = require("express");
const app = express();

const connectDB = require("../config/databse")

connectDB().then(()=>{
    console.log("Database connected sucessfully");
    app.listen("7777",()=>{
        console.log("server is listening to the port 7777");   
    })
}).catch((err)=>console.log("got an error"))    

