const pop = document.querySelector(".header-pop");
const popClose = document.querySelector(".header-pop--close");

console.log(pop);

popClose.addEventListener("click", (e) => {
  console.log(e.target);
  pop.style.display = "none";
});
