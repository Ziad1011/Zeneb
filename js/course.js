// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.querySelectorAll("#menu li");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("active")); // Remove active class from all items
      item.classList.add("active"); // Add active class to the clicked item
    });
  });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Example: Smooth scroll to top functionality
  const scrollToTopBtn = document.querySelector(".stethoscope-btn");

  scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    // Show button after scrolling down 300px
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
