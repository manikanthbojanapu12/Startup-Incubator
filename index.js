// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
menuBtn.onclick = () => {
    navbar.classList.add("active");
};
}

if (closeBtn && navbar) {
closeBtn.onclick = () => {
    navbar.classList.remove("active");
};
}

document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Video Slider
const videos = document.querySelectorAll(".hero-video");
const dots = document.querySelectorAll(".dot");

let current = 0;

function changeVideo() {
    if (!videos.length || !dots.length) {
        return;
    }

    videos[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = (current + 1) % videos.length;

    videos[current].classList.add("active");
    dots[current].classList.add("active");
}

if (videos.length && dots.length) {
    setInterval(changeVideo, 6000);
}

// Dot Click
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        videos[current].classList.remove("active");
        dots[current].classList.remove("active");

        current = index;

        videos[current].classList.add("active");
        dots[current].classList.add("active");
    });
});

AOS.init({
    duration: 1200,
    offset: 100,
    once: false,
    easing: "ease-in-out"
});

/*==============================
NEWSLETTER SUBSCRIBE
==============================*/

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const subscribeMessage = document.getElementById("subscribeMessage");

if (newsletterForm && newsletterEmail && subscribeMessage) {
newsletterForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = newsletterEmail.value.trim();

    // Email Pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty Field
    if(email === ""){

        subscribeMessage.className = "error";
        subscribeMessage.innerHTML = "Please enter your email address.";

        newsletterEmail.focus();

        return;

    }

    // Invalid Email
    if(!emailPattern.test(email)){

        subscribeMessage.className = "error";
        subscribeMessage.innerHTML = "Please enter a valid email address.";

        newsletterEmail.focus();

        return;

    }

    // Success
    subscribeMessage.className = "success";
    subscribeMessage.innerHTML = "Subscription successful! Redirecting...";

    newsletterEmail.value = "";

    // Redirect after 2 seconds
    setTimeout(function(){

        window.location.href = "404.html";

},2000);

});
}

/*====================================
CONTACT FORM VALIDATION
====================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

const contactNameInput=document.getElementById("name");
const contactPhoneInput=document.getElementById("phone");
const contactMessageInput=document.getElementById("message");

if(contactNameInput){
contactNameInput.addEventListener("input",function(){
this.value=this.value.replace(/[^A-Za-z\s]/g,"");
});
}

if(contactPhoneInput){
contactPhoneInput.addEventListener("input",function(){
this.value=this.value.replace(/\D/g,"").slice(0,10);
});
}

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const subject=document.getElementById("subject").value.trim();
const message=document.getElementById("message").value.trim();

const formMessage=document.getElementById("formMessage");

/* Regular Expressions */

const namePattern=/^[A-Za-z\s]+$/;
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern=/^[0-9]{10}$/;
const subjectPattern=/^[A-Za-z\s]+$/;

/* Clear */

formMessage.innerHTML="";
formMessage.style.color="red";

/* Name */

if(name===""){
formMessage.innerHTML="Please enter your name.";
return;
}

if(!namePattern.test(name)){
formMessage.innerHTML="Name should contain only alphabets.";
return;
}

/* Email */

if(email===""){
formMessage.innerHTML="Please enter your email.";
return;
}

if(!emailPattern.test(email)){
formMessage.innerHTML="Please enter a valid email address.";
return;
}

/* Phone */

if(phone===""){
formMessage.innerHTML="Please enter your phone number.";
return;
}

if(!phonePattern.test(phone)){
formMessage.innerHTML="Phone number must be exactly 10 digits.";
return;
}

/* Subject */

if(subject===""){
formMessage.innerHTML="Please enter the subject.";
return;
}

if(!subjectPattern.test(subject)){
formMessage.innerHTML="Subject should contain only letters.";
return;
}

/* Message */

if(message===""){
formMessage.innerHTML="Please enter your message.";
return;
}

if(message.length<10){
formMessage.innerHTML="Message should contain at least 10 characters.";
if(contactMessageInput){
contactMessageInput.focus();
}
return;
}

/* Success */

formMessage.style.color="#28a745";
formMessage.innerHTML="Message sent successfully! Redirecting...";

/* Clear Form */

contactForm.reset();

/* Redirect */

setTimeout(function(){

window.location.href="404.html";

},1500);

});

}

// ==========================
// Loader
// ==========================

window.addEventListener("load", function(){

    setTimeout(function(){

        const loader=document.getElementById("loader");

        if(loader){
            loader.classList.add("hide");
        }

    },1500); // 2 seconds

});
