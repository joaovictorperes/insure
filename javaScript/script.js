const btnMobile = document.querySelector(".btn-mobile");

function toggleMenu() {
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
