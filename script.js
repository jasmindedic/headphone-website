"use strict";

// Get hamburger elements
let toggleBtn = document.querySelector(".toggle-button");
let navLinks = document.querySelector(".nav-links");
let logo = document.querySelector(".logo");


// Event listener for hamburger menu
toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    logo.classList.toggle("active");

})

