function Token(req,res,next){
    console.log(req.url)
    console.log("Creating Token")
    // const TOKEN = "123"
    const TOKEN = true
    req.token = TOKEN
    next()
}
module.exports = Token