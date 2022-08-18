const links = document.getElementById("links")
const burger = document.getElementById("burger")

burger.addEventListener("click", () => {
  links.classList.toggle("open")
  burger.classList.toggle("open")
})
