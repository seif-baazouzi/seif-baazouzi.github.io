const links  = document.getElementById("links")
const burger = document.getElementById("burger")
const navbar = document.getElementById("navbar")

const homeSection     = document.getElementById("home")
const aboutSection    = document.getElementById("about")
const projectsSection = document.getElementById("projects")
const contactSection  = document.getElementById("contact")

const darkModeSwitcher = document.getElementById("dark-mode-switcher")

function setActiveLink(linkID) {
  const linksList = document.querySelectorAll("#links a")
  linksList.forEach(link => link.classList.remove("active"))
  
  document.getElementById(linkID).classList.add("active")
}

function getOffsetTop(el) {
  let top = 0
  while(el && !isNaN(el.offsetTop) ) {
    top += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }

  return top
}

function setActiveSectionLink() {
  const padding = 250
  const scroll = window.document.scrollingElement.scrollTop

  const linksList = document.querySelectorAll("#links a")
  linksList.forEach(link => link.classList.remove("active"))
  
  if(scroll >= getOffsetTop(contactSection)-padding) {
    setActiveLink("contact-link")
  } else if(scroll >= getOffsetTop(projectsSection)-padding) {
    setActiveLink("projects-link")
  } else if(scroll >= getOffsetTop(aboutSection)-padding) {
    setActiveLink("about-link")
  } else {
    setActiveLink("home-link")
  }
}

// open navbar links
burger.addEventListener("click", () => {
  links.classList.toggle("open")
  burger.classList.toggle("open")
})

// set active link when 
window.onhashchange = () => {
  const hash = document.location.hash
  let linkID = "home-link"
  if(hash) {
    linkID = `${hash.substring(1)}-link`
  }

  setActiveLink(linkID)

  links.classList.remove("open")
  burger.classList.remove("open")
}

window.onscroll = () => {
  // show shadow when scrolling down 
  if(window.document.scrollingElement.scrollTop > 250) {
    navbar.classList.add("active")
  } else {
    navbar.classList.remove("active")
  }

  // set active link when scrolling
  setActiveSectionLink()
}

// set the init active link
setActiveSectionLink()

// switch dark mode
darkModeSwitcher.addEventListener("click", () => {
  const mode = localStorage.getItem("mode") || "light"

  if(mode === "light") {
    document.body.classList.add("dark")
    localStorage.setItem("mode", "dark")
  } else {
    document.body.classList.remove("dark")
    localStorage.setItem("mode", "light")
  }
})

// set the init mode
const mode = localStorage.getItem("mode") || "light"

if(mode === "light") {
  document.body.classList.remove("dark")
} else {
  document.body.classList.add("dark")
}
