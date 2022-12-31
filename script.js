let parallax = new Rellax('.parallax')
const navClose = document.querySelector('.nav__close')
const navToggle = document.querySelector('.nav__toggle')
const navMenu = document.querySelector('.nav__menu')
const darkTheme = document.querySelectorAll('#toggle-dark')

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
  darkTheme[1].classList.add('show-icon')
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
  darkTheme[1].classList.remove('show-icon')
})

const navLink = document.querySelectorAll('.nav__link')

function handleClickLink() {
  const navMenu = document.querySelector('.nav__menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', handleClickLink))

function scrollHeader() {
  const header = document.querySelector('.header')

  this.scrollY >= 50
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

function scrollUp() {
  const scrollUp = document.querySelector('.scrollup')

  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

window.addEventListener('scroll', () => {
  navMenu.classList.remove('show-menu')
})

function handleDarkTheme() {
  this.classList.toggle('ph-sun-thin')
  document.body.classList.toggle('dark')
}

darkTheme.forEach(item => {
  item.addEventListener('click', handleDarkTheme)
})

gsap.from('.home-village', 1.2, { opacity: 0, y: 100, delay: 0.1 })
gsap.from('.home-pine', 1.2, { opacity: 0, y: 150, delay: 0.3 })
gsap.from('.home-mountain-2', 1.2, { opacity: 0, x: 150, delay: 0.5 })
gsap.from('.home-mountain-3', 1.2, { opacity: 0, x: -150, delay: 0.6 })
gsap.from('.home-mountain-1', 1.2, { opacity: 0, y: 250, delay: 0.7 })
gsap.from('.home-moon', 1.2, { opacity: 0, y: 200, delay: 0.8 })
gsap.from('.home-trineo', 1.2, { opacity: 0, x: -200, delay: 0.8 })
gsap.from('.home-title', 1.2, { opacity: 0, x: -60, delay: 1 })

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200
})

sr.reveal(`.about-data,  .celebrate-img`, { origin: 'rigth' })
sr.reveal(`.about-img, .celebrate-data`, { origin: 'left' })
sr.reveal(`.send-card`, { interval: 150 })
sr.reveal(`.footer`)
