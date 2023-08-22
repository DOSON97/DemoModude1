//buoc1: lay ra nut btn dang ky
const btnRegister = document.querySelector(".signup-signInbutton");
//console.log(btnRegister);
//buoc3:laay cac o input ra
const inputUserRegister = document.querySelector(".input-signup-email");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const userLocal = JSON.parse(localStorage.getItem("users")) || [];


btnRegister.addEventListener("click",function(e){
    //chan su kien trong form
    e.preventDefault();
    //validate cho input
    if(inputUserRegister.value === "" || inputPasswordRegister.value === "" ){
        alert("vui long k der trong");
    }else{
        //lay data o input va them vao object
        const user ={
            email: inputUserRegister.value,
            password: inputPasswordRegister.value,
        };
        // ... laa toan tu spread baor luu ca noi dung cu vaf them user moi vao
        const updateUser =[...userLocal,user];
        //push ovject vaof 1 cai array 
        userLocal.push(user);
        //them du lieu user vaof localStorage
        localStorage.setItem("users",JSON.stringify(updateUser));
        alert("dang ky thanh cong");
         
        window.location.href="login.html"
        
        // console.log(updateUser);   
        
    }
});