const links = document.getElementById("links")
const burger = document.getElementById("burger")

burger.addEventListener("click", () => {
  links.classList.toggle("open")
  burger.classList.toggle("open")
})

window.onhashchange = () => {
  const links = document.querySelectorAll("#links a")
  links.forEach(link => link.classList.remove("active"))

  const hash = document.location.hash
  let linkID = "home-link"
  if(hash) {
    linkID = `${hash.substring(1)}-link`
  }

  document.getElementById(linkID).classList.add("active")

  links.classList.remove("open")
  burger.classList.remove("open")
}
