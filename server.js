const cors = require("cors")
const express = require("express"); 
const mongoose = require("mongoose"); 
const app = express(); 

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://sharanprashanth534:llm@cluster0.sa5a9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("mongo database connected")})
.catch(()=>{console.log("database not connected")})

const userScehma = new mongoose.Schema({
  name:{
      type:String
  }
})

const User = mongoose.model("user",userScehma)


app.post("/login", (req, res) => { 
    const username = req.body.username; 
    const userDetails = new User({
      name:username
  })
  userDetails.save()
  .then(()=>{res.send("success")})
  .catch(()=>{res.send("didnt save")})
  
});


app.listen(3000, () => { 
    console.log("Server started on port 3000"); 
});


