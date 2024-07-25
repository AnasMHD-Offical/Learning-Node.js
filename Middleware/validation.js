function Validation(req,res,next){
    if(req.token){
    console.log("Token Approved")
    next()
    return
    }
    else{
        console.log("No Auth");
        res.send("<h1>NO Auth</h1>")
    }
}
module.exports = Validation