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
const ham = document.querySelector(".ham")
hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    toggleMenu.classList.toggle('menu-active')
})

// click outside menu
window.addEventListener('click', (e) => {
    e.stopPropagation()
    if (!toggleMenu.contains(e.target) && hamburgerBtn) {
        console.log('clicked outside')
        toggleMenu.classList.toggle('menu-active')
        ham.classList.toggle('active')
    }
})