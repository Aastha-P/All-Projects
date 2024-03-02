let newuser=document.getElementById("name")
let newemail=document.getElementById("newemail")
let newpassword=document.getElementById("newpassword")
let submit=document.getElementById("submit")


let newusers=[]
let newpassw=[]



submit.addEventListener('click',function(){
    newusers.push(newuser.value)
    newpassw.push(newpassword.value)

    if(newuser.value==""){
        alert("Fill username box")
    }
    else if(newemail.value==""){
        alert("Fill email box")
    }
    else if(newpassword.value==""){
        alert("Fill password box")
    }

    newuser.value=""
    newemail.value=""
    newpassword.value=""
    
})

