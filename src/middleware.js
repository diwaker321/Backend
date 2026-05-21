const express = require("express");
const app = express();

const {adminauth } = require("../middleware/adminAuth")
const{userauth} = require("../middleware/userauth")


//this is middleware
app.use("/admin", adminauth );
// app.use("/user" , userauth)

app.get("/admin/getAllData/:username/:userpassword", (req, res) => {
    console.log(req.params);
    res.send("all the data has been fetched");
});

app.get("/admin/deleteuser" , (req,res)=>{
    res.send("Data has been deleted")
})

app.get("/user/" , userauth, (req,res)=>{
    res.send("this is user section")
})

app.get("/user/:username" ,userauth , (req,res)=>{
    res.send(`hello ${req.params.username}`)
})

//how to handle the error in express

app.get("/login" , (req,res)=>{
    throw new Error("custom error ...")
})
app.use("/" , (err,req,res,next)=>{
    if(err){
        console.log('err: ', err);
        res.status(500).send("Something went wrong")
    }
})

app.listen("3000", () => {
  console.log("server is listening to port 3000");
});
