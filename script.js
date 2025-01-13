//Main
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
  
    menuToggle.addEventListener("click", () => {
      navbar.querySelector("ul").classList.toggle("active");
    });
  });
  