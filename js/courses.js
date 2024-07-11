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
