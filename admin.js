const sidebar=document.getElementById("sidebar");

const menuToggle=document.getElementById("menuToggle");

const closeSidebar=document.getElementById("closeSidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        sidebar.classList.add("active");
    });
}

if (closeSidebar && sidebar) {
    closeSidebar.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        sidebar.classList.remove("active");
    });
}

document.querySelectorAll(".admin-profile").forEach(function(profileButton){
    profileButton.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
    });
});

// ================================
// Active Sidebar Menu
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const currentPage = window.location.pathname.split("/").pop();

    const menuLinks = document.querySelectorAll(".sidebar-menu a");

    menuLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

});

// Display Logged-in Email

const email=localStorage.getItem("loggedInEmail");

if(email){

document.getElementById("adminEmail").innerHTML=email;

}

//=====================================
// VIEW BUTTON
//=====================================

document.querySelectorAll(".view-btn").forEach(function(button){

    button.addEventListener("click", function(e){

        e.preventDefault();

        let row = this.closest("tr");

        let id = row.cells[0].innerText;
        let name = row.cells[1].innerText;
        let village = row.cells[2].innerText;
        let focusArea = row.cells[3].innerText;
        let land = row.cells[4].innerText;
        let status = row.cells[5].innerText;

        alert(
            "Founder Details\n\n" +
            "ID : " + id +
            "\nName : " + name +
            "\nVillage : " + village +
            "\nFocus Area : " + focusArea +
            "\nProgram : " + land +
            "\nStatus : " + status
        );

    });

});


//=====================================
// EDIT BUTTON
//=====================================

document.querySelectorAll(".edit-btn").forEach(function(button){

    button.addEventListener("click", function(e){

        e.preventDefault();

        let row = this.closest("tr");

        let name = prompt("Edit Founder Name", row.cells[1].innerText);

        if(name !== null && name.trim() !== ""){

            row.cells[1].innerText = name;

        }

        let village = prompt("Edit Village", row.cells[2].innerText);

        if(village !== null && village.trim() !== ""){

            row.cells[2].innerText = village;

        }

        let focusArea = prompt("Edit Focus Area", row.cells[3].innerText);

        if(focusArea !== null && focusArea.trim() !== ""){

            row.cells[3].innerText = focusArea;

        }

        let land = prompt("Edit Land", row.cells[4].innerText);

        if(land !== null && land.trim() !== ""){

            row.cells[4].innerText = land;

        }

        alert("Founder details updated successfully.");

    });

});


//=====================================
// DELETE BUTTON
//=====================================

document.querySelectorAll(".delete-btn").forEach(function(button){

    button.addEventListener("click", function(e){

        e.preventDefault();

        let row = this.closest("tr");

        let confirmDelete = confirm("Are you sure you want to delete this founder?");

        if(confirmDelete){

            row.remove();

            alert("Founder deleted successfully.");

        }

    });

});


//==============================
// CONSULTANT ACTION BUTTONS
//==============================

document.addEventListener("DOMContentLoaded", function () {

    // VIEW BUTTON
    document.querySelectorAll(".consultant-view-btn").forEach(function(btn){

        btn.addEventListener("click", function(e){

            e.preventDefault();

            const row = this.closest("tr");

            const id = row.cells[0].innerText;
            const name = row.cells[1].innerText;
            const specialization = row.cells[2].innerText;
            const experience = row.cells[3].innerText;
            const founders = row.cells[4].innerText;
            const status = row.cells[5].innerText;

            alert(
                "Consultant Details\n\n" +
                "ID : " + id +
                "\nName : " + name +
                "\nSpecialization : " + specialization +
                "\nExperience : " + experience +
                "\nAssigned Founders : " + founders +
                "\nStatus : " + status
            );

        });

    });

    // EDIT BUTTON
    document.querySelectorAll(".consultant-edit-btn").forEach(function(btn){

        btn.addEventListener("click", function(e){

            e.preventDefault();

            const row = this.closest("tr");

            let name = row.cells[1].innerText;
            let specialization = row.cells[2].innerText;
            let experience = row.cells[3].innerText;

            let newName = prompt("Edit Consultant Name", name);

            if(newName === null) return;

            let newSpecialization = prompt("Edit Specialization", specialization);

            if(newSpecialization === null) return;

            let newExperience = prompt("Edit Experience", experience);

            if(newExperience === null) return;

            row.cells[1].innerText = newName;
            row.cells[2].innerText = newSpecialization;
            row.cells[3].innerText = newExperience;

            alert("Consultant updated successfully.");

        });

    });

    // DELETE BUTTON
    document.querySelectorAll(".consultant-delete-btn").forEach(function(btn){

        btn.addEventListener("click", function(e){

            e.preventDefault();

            const row = this.closest("tr");

            let consultantName = row.cells[1].innerText;

            if(confirm("Are you sure you want to delete " + consultantName + " ?")){

                row.remove();

                alert("Consultant deleted successfully.");

            }

        });

    });

});

// ===============================
// Program Management Actions
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // VIEW BUTTON
    document.querySelectorAll(".crop-view-btn").forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const row = this.closest("tr");

            const programID = row.cells[0].innerText;
            const programName = row.cells[1].innerText;
            const founder = row.cells[2].innerText;
            const area = row.cells[3].innerText;
            const stage = row.cells[4].innerText;
            const health = row.cells[5].innerText;

            alert(
`Program Details

Program ID : ${programID}

Program Name : ${programName}

Founder : ${founder}

Area : ${area}

Growth Stage : ${stage}

Health : ${health}`
            );

        });

    });


    // EDIT BUTTON
    document.querySelectorAll(".crop-edit-btn").forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const row = this.closest("tr");

            const programID = row.cells[0].innerText;

            const newStage = prompt(
                "Update Growth Stage:",
                row.cells[4].innerText
            );

            if (newStage !== null && newStage.trim() !== "") {

                row.cells[4].innerText = newStage;

                alert("Program " + programID + " updated successfully.");

            }

        });

    });


    // DELETE BUTTON
    document.querySelectorAll(".crop-delete-btn").forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const row = this.closest("tr");

            const programName = row.cells[1].innerText;

            if (confirm("Delete " + programName + " ?")) {

                row.remove();

                alert("Program deleted successfully.");

            }

        });

    });

});

/*=====================================
MARKET MANAGEMENT ACTION BUTTONS
=====================================*/

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // VIEW BUTTON
    // ==========================
    document.querySelectorAll(".market-view-btn").forEach(button => {

        button.addEventListener("click", function(e) {

            e.preventDefault();

            const row = this.closest("tr");

            const id = row.cells[0].innerText;
            const startup = row.cells[1].innerText;
            const market = row.cells[2].innerText;
            const price = row.cells[3].innerText;
            const trend = row.cells[4].innerText;
            const updated = row.cells[5].innerText;

            alert(
`MARKET DETAILS

ID : ${id}
Startup : ${startup}
Market : ${market}
Price : ${price}
Trend : ${trend}
Updated : ${updated}`
            );

        });

    });


    // ==========================
    // EDIT BUTTON
    // ==========================
    document.querySelectorAll(".market-edit-btn").forEach(button => {

        button.addEventListener("click", function(e) {

            e.preventDefault();

            const row = this.closest("tr");

            const startup = row.cells[1];
            const market = row.cells[2];
            const price = row.cells[3];

            const newStartup = prompt("Edit Startup Name", startup.innerText);

            if (newStartup === null) return;

            const newMarket = prompt("Edit Market", market.innerText);

            if (newMarket === null) return;

            const newPrice = prompt("Edit Price", price.innerText);

            if (newPrice === null) return;

            startup.innerText = newStartup;
            market.innerText = newMarket;
            price.innerText = newPrice;

            alert("Market details updated successfully.");

        });

    });


    // ==========================
    // DELETE BUTTON
    // ==========================
    document.querySelectorAll(".market-delete-btn").forEach(button => {

        button.addEventListener("click", function(e) {

            e.preventDefault();

            const row = this.closest("tr");

            const startup = row.cells[1].innerText;

            if(confirm(`Delete ${startup} from the funding pipeline?`)){

                row.remove();

                alert(startup + " deleted successfully.");

            }

        });

    });

});

/*==========================
SETTINGS FORM VALIDATION
==========================*/

const saveBtn = document.querySelector(".save-settings button");

if (saveBtn) {
saveBtn.addEventListener("click", function (e) {

    e.preventDefault();

    // Remove previous error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.remove());

    // Get Inputs
    const fullName = document.querySelector('input[placeholder="Enter Full Name"]');
    const email = document.querySelector('input[placeholder="Enter Email"]');
    const phone = document.querySelector('input[placeholder="Enter Phone Number"]');
    const designation = document.querySelector('input[placeholder="Enter Designation"]');

    const passwords = document.querySelectorAll('input[type="password"]');

    const currentPassword = passwords[0];
    const newPassword = passwords[1];
    const confirmPassword = passwords[2];

    let valid = true;

    function showError(input, message) {

        const error = document.createElement("small");

        error.className = "error-message";
        error.style.color = "#e53935";
        error.style.display = "block";
        error.style.marginTop = "5px";
        error.style.fontSize = "13px";

        error.innerText = message;

        input.style.border = "2px solid #e53935";

        input.parentElement.appendChild(error);

        valid = false;
    }

    function clearError(input) {
        input.style.border = "1px solid #ccc";
    }

    /*==========================
    FULL NAME
    ==========================*/

    if (fullName.value.trim() === "") {

        showError(fullName, "Full Name is required");

    } else if (!/^[A-Za-z ]+$/.test(fullName.value.trim())) {

        showError(fullName, "Only alphabets are allowed");

    } else {

        clearError(fullName);

    }

    /*==========================
    EMAIL
    ==========================*/

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        showError(email, "Email is required");

    } else if (!emailPattern.test(email.value.trim())) {

        showError(email, "Enter a valid email address");

    } else {

        clearError(email);

    }

    /*==========================
    PHONE
    ==========================*/

    if (phone.value.trim() === "") {

        showError(phone, "Phone Number is required");

    } else if (!/^\d{10}$/.test(phone.value.trim())) {

        showError(phone, "Phone Number must be exactly 10 digits");

    } else {

        clearError(phone);

    }

    /*==========================
    DESIGNATION
    ==========================*/

    if (designation.value.trim() === "") {

        showError(designation, "Designation is required");

    } else if (!/^[A-Za-z ]+$/.test(designation.value.trim())) {

        showError(designation, "Only alphabets are allowed");

    } else {

        clearError(designation);

    }

    /*==========================
    CURRENT PASSWORD
    ==========================*/

    if (currentPassword.value.trim() === "") {

        showError(currentPassword, "Current Password is required");

    } else {

        clearError(currentPassword);

    }

    /*==========================
    NEW PASSWORD
    ==========================*/

    if (newPassword.value.trim() === "") {

        showError(newPassword, "New Password is required");

    } else if (newPassword.value.length < 6) {

        showError(newPassword, "Password must contain at least 6 characters");

    } else {

        clearError(newPassword);

    }

    /*==========================
    CONFIRM PASSWORD
    ==========================*/

    if (confirmPassword.value.trim() === "") {

        showError(confirmPassword, "Confirm Password is required");

    } else if (confirmPassword.value !== newPassword.value) {

        showError(confirmPassword, "Passwords do not match");

    } else {

        clearError(confirmPassword);

    }

    /*==========================
    SUCCESS
    ==========================*/

    if (valid) {

        alert("Settings saved successfully!");

        document.querySelectorAll(".form-group input").forEach(input => {
            input.value = "";
            input.style.border = "1px solid #ccc";
        });

        document.querySelectorAll(".error-message").forEach(msg => msg.remove());

        // Reset checkboxes if required
        // document.querySelectorAll('input[type="checkbox"]').forEach(box => box.checked = false);

    }

});
}

