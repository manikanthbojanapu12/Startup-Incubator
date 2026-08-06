//=========================
// AOS
//=========================
AOS.init({
    duration: 1000,
    once: true
});

//=========================
// TAB SWITCHING
//=========================

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

function openLogin() {
    loginBox.classList.add("active");
    signupBox.classList.remove("active");

    loginBox.style.display = "block";
    signupBox.style.display = "none";

    loginTab.classList.add("active");
    signupTab.classList.remove("active");
}

function openSignup() {
    signupBox.classList.add("active");
    loginBox.classList.remove("active");

    signupBox.style.display = "block";
    loginBox.style.display = "none";

    signupTab.classList.add("active");
    loginTab.classList.remove("active");
}

signupTab.onclick = openSignup;
loginTab.onclick = openLogin;

showSignup.onclick = function(e){
    e.preventDefault();
    openSignup();
}

showLogin.onclick = function(e){
    e.preventDefault();
    openLogin();
}

//=========================
// PASSWORD TOGGLE
//=========================

document.querySelectorAll(".toggle-password").forEach(icon=>{

    icon.onclick=function(){

        let input=this.previousElementSibling;

        if(input.type==="password"){

            input.type="text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");

        }

        else{

            input.type="password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");

        }

    }

});

//=========================
// DROPDOWN
//=========================

function setupDropdown(btnId, menuId, textId, hiddenId){

    const btn=document.getElementById(btnId);
    const menu=document.getElementById(menuId);
    const text=document.getElementById(textId);
    const hidden=document.getElementById(hiddenId);

    btn.onclick=function(e){

        e.stopPropagation();

        document.querySelectorAll(".dropdown-menu").forEach(m=>{

            if(m!==menu)
                m.style.display="none";

        });

        menu.style.display=
        menu.style.display==="block" ? "none":"block";

    }

    menu.querySelectorAll(".dropdown-item").forEach(item=>{

        item.onclick=function(){

            let role=this.dataset.role;

            text.innerHTML=role;

            hidden.value=role;

            menu.style.display="none";

        }

    });

}

setupDropdown(
"loginRoleBtn",
"loginDropdown",
"loginRoleText",
"loginRole"
);

setupDropdown(
"signupRoleBtn",
"signupDropdown",
"signupRoleText",
"signupRole"
);

window.onclick=function(){

    document.querySelectorAll(".dropdown-menu").forEach(menu=>{

        menu.style.display="none";

    });

}

//=========================
// VALIDATION
//=========================

const nameRegex=/^[A-Za-z ]+$/;

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex=/^[0-9]{10}$/;

//=========================
// SIGNUP
//=========================

document.getElementById("signupForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("signupName").value.trim();

let role=document.getElementById("signupRole").value;

let email=document.getElementById("signupEmail").value.trim();

let phone=document.getElementById("signupPhone").value.trim();

let password=document.getElementById("signupPassword").value;

let confirm=document.getElementById("confirmPassword").value;


// Role

if(role==""){

alert("Please select your role.");

return;

}

// Name

if(!nameRegex.test(name)){

alert("Name should contain alphabets only.");

return;

}

// Email

if(!emailRegex.test(email)){

alert("Enter valid email address.");

return;

}

// Phone

if(!phoneRegex.test(phone)){

alert("Phone number must contain exactly 10 digits.");

return;

}

// Password

if(password.length<6){

alert("Password should contain minimum 6 characters.");

return;

}

// Confirm Password

if(password!==confirm){

alert("Password and Confirm Password do not match.");

return;

}

// Save

let user={

name:name,
role:role,
email:email,
phone:phone,
password:password

};

localStorage.setItem("stacklyUser",JSON.stringify(user));

alert("Registration Successful.");

this.reset();

document.getElementById("signupRole").value="";

document.getElementById("signupRoleText").innerHTML="Choose Role";

openLogin();

});

//=========================
// LOGIN
//=========================

//=========================
// LOGIN
//=========================

document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let role = document.getElementById("loginRole").value.trim();
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    // Role Validation
    if (role === "") {
        alert("Please select your role.");
        return;
    }

    // Email Validation
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Store Login Details
    localStorage.setItem("loggedInEmail", email);
    localStorage.setItem("loggedInRole", role);

    alert("Login Successful!");

    // Clear Form
    this.reset();

    document.getElementById("loginRoleText").innerHTML = "Choose Role";
    document.getElementById("loginRole").value = "";

    //=========================
    // ROLE BASED REDIRECT
    //=========================

    if (role === "Admin") {

        window.location.href = "admin.html";

    } 
    else if (role === "Client") {

        window.location.href = "client.html";

    } 
    else {

        window.location.href = "index.html";

    }

});