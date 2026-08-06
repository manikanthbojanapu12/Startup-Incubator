// Get email stored during login
const loggedInEmail = localStorage.getItem("loggedInEmail");

// Display email in Topbar
const topbarEmail = document.getElementById("clientEmail");
if (topbarEmail && loggedInEmail) {
    topbarEmail.textContent = loggedInEmail;
}

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

// Display email in Profile Card
const profileEmail = document.getElementById("profileEmail");
if (profileEmail && loggedInEmail) {
    profileEmail.textContent = loggedInEmail;
}

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

document.querySelectorAll(".client-profile").forEach(function(profileButton){
    profileButton.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
    });
});

// ==============================
// CLIENT DASHBOARD PROJECT ACTIONS
// ==============================

// Wait for DOM load
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // VIEW BUTTON
    // ==========================
    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const projectCard = this.closest(".project-box");
            const projectName = projectCard.querySelector("h3").innerText;

            alert("🔍 Viewing Project:\n" + projectName);

            // You can redirect to project details page
            // window.location.href = "project-details.html";
        });
    });


    // ==========================
    // UPDATE / EDIT BUTTON
    // ==========================
    const updateButtons = document.querySelectorAll(".update-btn");

    updateButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const projectCard = this.closest(".project-box");
            const projectName = projectCard.querySelector("h3").innerText;

            alert("✏️ Edit Project:\n" + projectName);

            // Example: open edit page
            // window.location.href = "edit-project.html?id=123";
        });
    });


    // ==========================
    // DOWNLOAD REPORT BUTTON
    // ==========================
    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const projectCard = this.closest(".project-box");
            const projectName = projectCard.querySelector("h3").innerText;

            alert("📥 Downloading Report for:\n" + projectName);

            // Simulate download
            const link = document.createElement("a");
            link.href = "#"; // replace with real file URL
            link.download = projectName + "-report.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });


    // ==========================
    // CANCEL / DELETE BUTTON
    // ==========================
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function () {

            const projectCard = this.closest(".project-box");
            const projectName = projectCard.querySelector("h3").innerText;

            const confirmDelete = confirm(
                "⚠️ Are you sure you want to cancel/delete this project?\n\n" + projectName
            );

            if (confirmDelete) {

                // Smooth remove animation
                projectCard.style.transition = "0.5s ease";
                projectCard.style.transform = "scale(0.8)";
                projectCard.style.opacity = "0";

                setTimeout(() => {
                    projectCard.remove();
                }, 500);

                alert("❌ Project Cancelled: " + projectName);
            }
        });
    });


});

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // VIEW BUTTON
    // ==========================
    const viewButtons = document.querySelectorAll(".view-btn");

    viewButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const row = this.closest("tr");

            if (row) {
                const deviceId = row.children[0].innerText;
                const deviceName = row.children[1].innerText;

                alert(`📡 Device Details:\n\nID: ${deviceId}\nName: ${deviceName}`);
            } else {
                alert("Viewing device details...");
            }
        });
    });

    // ==========================
    // CONTROL BUTTON
    // ==========================
    const controlButtons = document.querySelectorAll(".update-btn");

    controlButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const row = this.closest("tr");

            if (row) {
                const deviceName = row.children[1].innerText;

                const confirmControl = confirm(
                    `Do you want to control this device?\n\nDevice: ${deviceName}`
                );

                if (confirmControl) {
                    alert("⚙️ Sending control command to device...");
                }
            } else {
                alert("Opening system controls...");
            }
        });
    });

    // ==========================
    // LOGS / DOWNLOAD BUTTON
    // ==========================
    const logButtons = document.querySelectorAll(".download-btn");

    logButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const row = this.closest("tr");

            if (row) {
                const deviceId = row.children[0].innerText;

                alert(`📥 Downloading logs for ${deviceId}...`);
            } else {
                alert("Downloading system logs...");
            }
        });
    });

    // ==========================
    // OPTIONAL: RESTART ALL DEVICES
    // ==========================
    const restartBtn = document.querySelector(".control-box .update-btn");

    if (restartBtn) {
        restartBtn.addEventListener("click", function (e) {
            e.preventDefault();

            const confirmRestart = confirm("⚠ Are you sure you want to restart ALL devices?");

            if (confirmRestart) {
                    alert("Restarting all startup workspace tools...");
            }
        });
    }

    // ==========================
    // OPTIONAL: RUN DIAGNOSTICS
    // ==========================
    const diagnosticsBtn = document.querySelector(".control-box .view-btn");

    if (diagnosticsBtn) {
        diagnosticsBtn.addEventListener("click", function (e) {
            e.preventDefault();

            alert("🧪 Running system diagnostics... Please wait.");
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {

    const editBtn = document.querySelector(".view-button");

    const profileName = document.querySelector(".profile-card h3");
    const profileRole = document.querySelector(".profile-card p");

    if (editBtn && profileName && profileRole) {
    editBtn.addEventListener("click", function () {

        let newName = prompt("Enter your name:", profileName.textContent);
        let newRole = prompt("Enter your role:", profileRole.textContent);

        if (newName !== null && newName.trim() !== "") {
            profileName.textContent = newName;
        }

        if (newRole !== null && newRole.trim() !== "") {
            profileRole.textContent = newRole;
        }

        alert("Profile Updated Successfully!");
    });
    }

});

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // ACCOUNT SETTINGS
    // ==========================
    const saveBtn = document.querySelector(".save-btn");

    if (saveBtn) {
    saveBtn.addEventListener("click", function () {

        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const phone = document.querySelectorAll('input[type="text"]')[1].value.trim();

        // Name Validation
        const namePattern = /^[A-Za-z ]+$/;

        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (!namePattern.test(name)) {
            alert("Name should contain only alphabets.");
            return;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation
        const phonePattern = /^[0-9]{10}$/;

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number must contain exactly 10 digits.");
            return;
        }

        alert("Profile updated successfully!");

        // Clear Form
        document.querySelector('input[type="text"]').value = "";
        document.querySelector('input[type="email"]').value = "";
        document.querySelectorAll('input[type="text"]')[1].value = "";

    });
    }



    // ==========================
    // PASSWORD VALIDATION
    // ==========================
    const passwordBtn = document.querySelectorAll(".save-btn")[1];

    if (passwordBtn) {
    passwordBtn.addEventListener("click", function () {

        const currentPassword = document.querySelectorAll('input[type="password"]')[0].value;
        const newPassword = document.querySelectorAll('input[type="password"]')[1].value;
        const confirmPassword = document.querySelectorAll('input[type="password"]')[2].value;

        if (currentPassword === "" || newPassword === "" || confirmPassword === "") {
            alert("Please fill all password fields.");
            return;
        }

        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Password updated successfully!");

        // Clear Password Fields
        document.querySelectorAll('input[type="password"]').forEach(input => {
            input.value = "";
        });

    });
    }

});

const clientName = document.getElementById("clientName");

if (clientName) {
    clientName.textContent = localStorage.getItem("loggedInName") || "Guest";
}
