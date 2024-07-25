function displayHelloWorld(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hey hello promise resolved!")
        },10000)
    })
}

async function handlepromise(){
    const data = await displayHelloWorld()
    console.log(data);
}
handlepromise()
displayHelloWorld()
.then(res => console.log(res))

const arr = [1,2,3]
console.log(arr);
arr.splice(1,0,5)
console.log(arr);

//Example for setInterval 
//NB:please not that if you are are wrinting setInterval make sure that you disable it with clearInterval otherwise it will lead to memory leaks

const interval = setInterval(()=>{
    console.log("running...")
},1000)
setTimeout(()=>{
    clearInterval(interval)
},5000)

console.log(global);