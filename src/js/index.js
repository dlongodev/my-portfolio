// switch theme
// const switcher = document.querySelector('#theme-switcher')
const switchBtn = document.querySelector('#switch')
let dark = "dark"
let light = "vey-peri"
const doc = document.firstElementChild

switchBtn.addEventListener('change', () =>
    switchBtn.checked
        ? setTheme(dark)
        : setTheme(light)
)

const setTheme = theme =>
    doc.setAttribute('color-scheme', theme)


// hamburger menu

const hamburgerBtn = document.querySelector('#hamBtn')
const toggleMenu = document.querySelector('#menuToggle')
hamburgerBtn.addEventListener('click', () => toggleMenu.classList.toggle('menu-active'))