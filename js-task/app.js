const body = document.querySelector("body")
const name = document.getElementById("keyName")
const code = document.getElementById("keyCode")
const title = document.getElementById("keyTitle")

body.addEventListener("keydown", (e)=> {

    console.log(e);
    
    name.textContent = e.key
    code.innerHTML = e.keyCode
    title.textContent = e.code
    
})