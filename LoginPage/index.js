const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("LoginPage"))

const emailDB = "anasmhdoffical006@gmail.com"
const passwordDB = "Anas@1234"

app.post("/login",(req,res)=>{
    const { email , password } = req.body
    if(email === emailDB && password === passwordDB){
        res.send("Login Successful")
        console.log(email)
    }else{
        res.send("Login Failed")
    }
})

const PORT = process.env.PORT || 3001;

app.listen(PORT)