const navbarMobile = document.querySelector(".navbar-mobile");
const navbarExpand = document.getElementById("navbar-expand");

navbarExpand.addEventListener("click", (e) => {
  navbarMobile.classList.toggle("navbar-mobile--show");
  console.log(e.target);
  console.log(navbarExpand);
});
