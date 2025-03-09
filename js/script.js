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
