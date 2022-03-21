// switch theme
// const switcher = document.querySelector('#theme-switcher')
const switchBtn = document.querySelector('#switch')
let dark = "dark"
let light = "very-peri"
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
// const ham = document.querySelector('.ham')
hamburgerBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('menu-active')
})

document.onclick = (e) => {
    if (e.target.id !== 'hamBtn' && e.target.id !== 'menuToggle') {
        console.log(toggleMenu)
        toggleMenu.classList.add('menu-active')
        hamburgerBtn.classList.remove('active')
    }
}