// Custom JavaScript for the project
document.addEventListener('DOMContentLoaded', function () {
    console.log("Project Loaded Successfully!");

    // Add logout functionality
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            alert("You have been logged out.");
            window.location.href = "index.html";
        });
    }
});
