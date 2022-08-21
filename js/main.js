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

const homeSection     = document.getElementById("home")
const aboutSection    = document.getElementById("about")
const projectsSection = document.getElementById("projects")
const contactSection  = document.getElementById("contact")

function getOffsetTop(el) {
  let top = 0
  while(el && !isNaN(el.offsetTop) ) {
    top += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }

  return top
}

function getActiveSection() {
  const padding = 100
  const scroll = window.document.scrollingElement.scrollTop

  const linksList = document.querySelectorAll("#links a")
  linksList.forEach(link => link.classList.remove("active"))
  
  if(scroll >= getOffsetTop(contactSection)-padding) {
    document.getElementById("contact-link").classList.add("active")
  } else if(scroll >= getOffsetTop(projectsSection)-padding) {
    document.getElementById("projects-link").classList.add("active")
  } else if(scroll >= getOffsetTop(aboutSection)-padding) {
    document.getElementById("about-link").classList.add("active")
  } else {
    document.getElementById("home-link").classList.add("active")
  }
}

window.onscroll = () => {
  if(window.document.scrollingElement.scrollTop > 250) {
    navbar.classList.add("active")
  } else {
    navbar.classList.remove("active")
  }

  getActiveSection()
}
