const navBar = document.querySelector(".navbarLi");
const hamburgarL = document.querySelector(".hamburgar");

hamburgarL.addEventListener("click", () => {
  navBar.classList.toggle("nav-open");
});
