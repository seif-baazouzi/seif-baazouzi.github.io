const links = document.getElementById("links")
const burger = document.getElementById("burger")
const navbar = document.getElementById("navbar")

burger.addEventListener("click", () => {
  links.classList.toggle("open")
  burger.classList.toggle("open")
})

window.onhashchange = () => {
  const linksList = document.querySelectorAll("#links a")
  linksList.forEach(link => link.classList.remove("active"))

  const hash = document.location.hash
  let linkID = "home-link"
  if(hash) {
    linkID = `${hash.substring(1)}-link`
  }

  document.getElementById(linkID).classList.add("active")

  links.classList.remove("open")
  burger.classList.remove("open")
}

window.onscroll = () => {
  if(window.document.scrollingElement.scrollTop > 250) {
    navbar.classList.add("active")
  } else {
    navbar.classList.remove("active")
  }
}
