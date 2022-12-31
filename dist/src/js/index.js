// switch theme
const switcher = document.querySelector('#theme-switcher')
const doc = document.firstElementChild

switcher.addEventListener('input', e =>
  setTheme(e.target.value))

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme)


// hamburger menu

const hamburgerBtn = document.querySelector('#hamBtn')
const toggleMenu = document.querySelector('#menuToggle')
hamburgerBtn.addEventListener('click', () => toggleMenu.classList.toggle('menu-active'))

