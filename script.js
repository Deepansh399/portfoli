'use strict';

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // You can perform form validation here if needed

    // Display alert with the response message
    alert('Your response has been recorded. Thank you!');

    // Optionally, you can reset the form fields
    contactForm.reset();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.querySelector('.contact-form');
  const emailInput = document.querySelector('input[name="email"]');
  const responseMessage = document.getElementById('responseMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate email using regex
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      
      return;
    }

    // Simulate form submission and display response message
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Your response has been recorded. Thank you!';

    // Optionally, you can reset the form fields
    contactForm.reset();
  });
});


