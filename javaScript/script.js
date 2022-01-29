const btnMobile = document.querySelector(".btn-mobile");
const links = document.querySelectorAll("a[href='./']");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.querySelector(".header-nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Close menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Open menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function linkPrevent(event) {
  event.preventDefault();
}

links.forEach((linkItem) => {
  linkItem.addEventListener("click", linkPrevent);
});
