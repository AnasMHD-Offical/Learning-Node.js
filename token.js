const express = require("express")
const app = express()
const Token = require("./Middleware/tokens")
const Validation = require("./Middleware/validation")
// const path = require("path")
const Middleware = [Token,Validation]

app.use(DateGenerator)

app.get("/profile",Middleware,(req,res,next)=>{
    console.log("user Logged in")
    res.send("<h1>Successfully</h1>")
})
app.get("/",(req,res,next)=>{
    console.log("Default URL")
    res.send("<h1>Home</h1>")
})

function DateGenerator(req,res,next){
    console.log(new Date())
    next()
}

const PORT = 3001

app.listen(PORT)