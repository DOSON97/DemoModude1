//b1: lay btn dang nhap
const btnLogin =document.querySelector(".login-signInbutton");
//b3 lay cac o input
const inputUserLogin = document.querySelector(".input-login-email");
const inputPasswordLogin = document.querySelector(".input-login-password");
///b2 viet su kien cho btn dang nhap
btnLogin.addEventListener("click",function(e){
    e.preventDefault();
    if(inputUserLogin.value === "" || inputPasswordLogin.value === ""){
        alert("vui long k de trong");
    }else{
        const userLocal = JSON.parse(localStorage.getItem("users"));
        console.log(userLocal);
        let flag = false;
            for(let i=0; i<userLocal.length;i++){
                if(userLocal[i].email=== inputUserLogin.value &&
                    userLocal[i].password == inputPasswordLogin.value){
                    
                    
                    flag=true;
                    break;
                }else{
                    flag=false;
                    break;
                }
            }
        if(flag){
            alert("dang nhap thanh cong");
            window.location.href="app2.html";
        }else{
            alert("dang nhap that bai");
        }
    }

})