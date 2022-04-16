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


// MARQUEE ANIMATION
// thanks @Coding_Journey tutorial for marquee elements setup

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const allMarqueeContent = document.querySelectorAll("ul.marquee-content");
const marqueeContent = () => {
    allMarqueeContent.forEach(marquee => {
        console.log(marquee)
        root.style.setProperty("--marquee-elements", marquee.children.length);
        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marquee.appendChild(marquee.children[i].cloneNode(true));
        }
        return marquee
    })
}

marqueeContent()

// GSAP scroll trigger marquee elements
gsap.registerPlugin(ScrollTrigger)

gsap.to("#scroll1", {
    scrollTrigger: {
        trigger: "#scroll1",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        ease: "power2",
    },
    xPercent: -20,
})

gsap.to("#scroll2", {
    scrollTrigger: {
        trigger: "#scroll2",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        ease: "power1",
    },
    xPercent: -30,
})

gsap.to("#scroll3", {
    scrollTrigger: {
        trigger: "#scroll3",
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        ease: "power2",
        toggleActions: "restart",
    },
    xPercent: -20,
})

// image animation
gsap.to(".img-2", {
    scrollTrigger: {
        trigger: ".img-3",
        start: "top bottom",
        end: "top 20vh",
        scrub: true,
    },
    x: "50px",
})

gsap.to(".img-3", {
    scrollTrigger: {
        trigger: ".img-3",
        start: "top bottom",
        end: "top 20vh",
        scrub: true,
    },
    x: "-50px",
})

gsap.to(".img-5", {
    scrollTrigger: {
        trigger: ".img-5",
        start: "top bottom",
        end: "top 20vh",
        scrub: true,
    },
    x: "110px",
})