const navBar = document.querySelector(".navbarli");
const hamburgarL = document.querySelector(".hamburgar");

hamburgarL.addEventListener("click", () => {
  navBar.classList.toggle("nav-open");
});
