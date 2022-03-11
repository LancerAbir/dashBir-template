// Add Hovered class in selected list item
let list = document.querySelectorAll(".dash__nav li");

function activeLink() {
    list.forEach((item) => item.classList.remove("hovered"));
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Main Toggle
let dashToggle = document.querySelector(".dash__toggle");
let dashNav = document.querySelector(".dash__nav");
let mainDash = document.querySelector(".main__dash");

dashToggle.onclick = function () {
    dashNav.classList.toggle("active");
    mainDash.classList.toggle("active");
};
