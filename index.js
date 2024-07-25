console.log(__filename);
console.log(__dirname);

const path = require("path")
const fs = require("fs")

// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.dirname(__filename))
// console.log(path.parse(__filename))
// console.log(path.join(__dirname,"api","index.js"))

// console.log(fs);

//how to add a file or folder
// fs.mkdir(path.join(__dirname,"/api/api2/index.html"),{},(err)=>{
//     if(err) throw err;
// })

//How to remove a file or folder
// fs.rmdir(path.join(__dirname,"/api/api2"),{ recursive : true },(err)=>{
//     if(err) throw err;
// })
//How to change the content in the file (overriding) 
// const user = "Anas Muhammed"
// const pass = "Anas@123"
// fs.writeFile(path.join(__dirname,"/api","api.text"),`username : ${user} ${"\n"}Password : ${pass} ${"\n"}---------${"\n"}`,(err)=>{
//     if(err) throw err
// })
//How to change the content in the file (without overring) addding new contes to the file
// const user = "Athul"
// const pass = "Athul@123"
// fs.appendFile(path.join(__dirname,"/api","api.text"),`${"\n"}---------${"\n"}username : ${user} ${"\n"}Password : ${pass} ${"\n"}---------${"\n"}`,(err)=>{
//     if(err) throw err
// })

//how to read the file
// fs.readFile(path.join(__dirname,"/api","api.text"),"utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })