const btn = document.querySelector('button')
const password = document.querySelector('#password')
const password_confirm = document.querySelector("#password-confirm")
const alink = document.querySelector("a")

btn.addEventListener("click",()=>{
    if (password.value != password_confirm.value){
        password.setAttribute("style","border-color: red;")
        password_confirm.setAttribute("style","border-color: red;")
        alert("confirm password not matching")
        event.preventDefault()
    }
})
alink.addEventListener("click",()=>{
    alert("Really?? You don't have any fear do you?!!")
    event.preventDefault()
})
btn.addEventListener("mouseover",()=>{
    if (btn.textContent == "Submit at your own risk"){
        btn.textContent = "Are you serious?????"
    } 
})
btn.addEventListener("mouseleave",()=>{
    btn.textContent = "Submit at your own risk"
})