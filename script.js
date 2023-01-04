const vectors = document.querySelector(".vectors");
const navLink = document.querySelector(".nav-links");

vectors.addEventListener("click", () => {
  vectors.classList.toggle("active");
  navLink.classList.toggle("active");
});
