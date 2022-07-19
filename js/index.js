// header__navigation_open
const hamburger = document.querySelector(".header__nav-btn");
const headerNav = document.querySelector(".header__navigation");

hamburger.addEventListener("click", () => {
  headerNav.classList.toggle("header__navigation_open");
})