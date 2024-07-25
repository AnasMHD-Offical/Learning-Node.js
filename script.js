// //about Http modules
// const http = require("http")
// const fs = require("fs")
// const path = require("path")
// const {parse} = require("node-html-parser")
// // const parse = require("jsdom")
// const server = http.createServer((req,res)=>{
//    if(req.url === "/"){
//     fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
//         if(err) throw err;
//         res.writeHead(200,{"Content-Type":"text/html"})
//         // const parsedData = parse(data)
//         // const id = parsedData.getElementById("hello")
//         // console.log(id)
//         if(true){
//             let change = parsedData.getElementById("hello").innerText = "<h1>hey my friend how are you!</h1>"
//             res.write(`${change}`) 
//             res.end();
//         }
        
//     })
// //    }
//    else if(req.url === "/contact"){
//     fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
//         if(err) throw err
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data);
//     })
//    }
// })

// const PORT = process.env.PORT || 3001 

// server.listen(PORT,()=>{
//     console.log(`Server Running on ${PORT}`)
// })