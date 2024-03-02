let uname=document.getElementById("name")
let password=document.getElementById("password")
let submit=document.getElementById("submit")


let users=[]
let passw=[]



submit.addEventListener('click',function(){
    users.push(uname.value)
    passw.push(password.value)

    if(uname.value==""){
        alert("Fill username box")
    }
    else if(password.value==""){
        alert("Fill password box")
    }

    
})

