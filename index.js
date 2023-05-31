let username = document.getElementById("username")
let email = document.getElementById("email")
let pwd = document.getElementById("pwd")
let cpwd = document.getElementById("cpwd")
let form= document.querySelector("form")

form.addEventListener("submit",(e)=>{

 if(!Validate()){
    e.preventDefault();
 }
})
 function Validate(){
    const usernameVal = username.value.trim();
    const emailVal=email.value.trim();
    const pwdVal = pwd.value.trim();
    const cpwdVal = cpwd.value.trim();
    let success = true;
     

    if (usernameVal ===''){
        success=false;
        setFailure(username,'The username cannot be empty')
    }
    else{
        setSucess(username)
    }

    if (emailVal=== ''){
        success=false;
        setFailure(email,'The email value cannot be empty')
    }
    else if (!ValidateEmail(emailVal)){
        setFailure(email,"enter a valid email")
    }
    else{
        setSucess(email)
    }

    if (pwdVal === ''){
        success=false;
        setFailure(pwd,'Password is required')
    }
    else if(pwdVal.length<8){
        success=false;
        setFailure(pwd,'pasword must be atleast 8 characters')
    }
    else{
        setSucess(pwd)
    }


    if (cpwdVal ===''){
        success=false;
        setFailure(cpwd,'Required')
    }
    else if(cpwdVal===pwdVal) {
        setSucess(cpwd)
    }
    else{
        success=false;
        setFailure(cpwd,'password does not match ')
    }
    return success;
    
 }


function setSucess(element){
    const  inputGrup = element.parentElement
    const errorMessage = inputGrup.querySelector(".error");
    errorMessage.innerText="";
    inputGrup.classList.add("success")
    inputGrup.classList.remove("failure")
}
function setFailure(element,msg){
    const  inputGrup = element.parentElement
    const errorMessage = inputGrup.querySelector(".error");
    errorMessage.innerText=msg;
    inputGrup.classList.remove("success")
    inputGrup.classList.add("failure")
}

    function ValidateEmail(mail) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
      {
        return (true)
      }
        
        return (false)
    }
    

