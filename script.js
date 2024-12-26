'use strict';

/**
 * add event on element
 */
// Function to toggle the drawer visibility
function toggleDrawer() {
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.drawer-overlay');
  navbar.classList.toggle('active');  // Toggle the active class on the navbar
  overlay.classList.toggle('active');  // Toggle the active class on the overlay
}

// Close the drawer when a navbar link is clicked
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar');
      const overlay = document.querySelector('.drawer-overlay');
      navbar.classList.remove('active');  // Close the navbar
      overlay.classList.remove('active');  // Remove overlay
  });
});

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});