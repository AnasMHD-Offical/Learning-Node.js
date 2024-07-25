const form = document.querySelector("form")
const email = document.querySelector("input[type = email]")
const password = document.querySelector("input[type = password]")

console.log(form)
form.addEventListener('submit',function onsubmitFunc(event){
    if(email.value === "" || password.value === ""){
        event.preventDefault();
        alert("fill the form")
        return false
    }
})

