let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

/*Section for CV */
function openCV() {
    document.getElementById("cvModal").style.display = "flex";
    document.body.classList.add("noscroll"); // Disable scrolling
}

function closeCV() {
    document.getElementById("cvModal").style.display = "none";
    document.body.classList.remove("noscroll"); // Re-enable scrolling
}


// FOR SECURITY OF THE WEBSITE //

// Create a custom alert box
function showCustomAlert(message) {
    let alertBox = document.createElement("div");
    alertBox.innerHTML = `<div style="
        position: fixed; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        border-radius: 10px;
        width: 50%;
        max-width: 400px;
        z-index: 9999;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
    ">
        ${message}
    </div>`;

    document.body.appendChild(alertBox);
    setTimeout(() => alertBox.remove(), 1000); // Hide after 1 seconds
}

// Disable right-click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    showCustomAlert("Right-click is disabled!");
});

// Block all key shortcuts
document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();

    if (event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        showCustomAlert("Shortcut is disabled!");
        return false;
    }

    if (key === "f12") {
        event.preventDefault();
        showCustomAlert("Developer tools are disabled!");
        return false;
    }

    if ((event.ctrlKey && key === "s") || // Ctrl + S (Save)
        (event.ctrlKey && key === "p") || // Ctrl + P (Print)
        (event.ctrlKey && key === "u") || // Ctrl + U (View Source)
        (event.ctrlKey && event.shiftKey && key === "s") || // Ctrl + Shift + S
        (key === "printscreen")) { // Print Screen (PrtScn)
        event.preventDefault(); 
        showCustomAlert("This action is disabled!");
        return false;
    }
});

// Block Print Screen via Clipboard (extra security)
document.addEventListener("keyup", function (event) {
    if (event.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // Clears clipboard to block screenshots
        showCustomAlert("Screenshots are disabled!");
    }
});

// 🔹 Detect Mobile Screenshot Attempts (Hide Content)
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.body.style.filter = "blur(100px)"; // Blur content on app-switching
    } else {
        document.body.style.filter = "none"; // Restore content when user returns
    }
});

// 🔹 Block Screenshot via Media Queries (Mobile)
const style = document.createElement("style");
style.innerHTML = `
    @media (max-width: 768px) {
        html {
            -webkit-user-select: none;
            -webkit-touch-callout: none;
            user-select: none;
        }
    }
`;
document.head.appendChild(style);
