let customCursor = document.querySelector(".cursor");
let cursorCircle = document.querySelector(".cursor-circle");
let textContainer = document.querySelector(".text-container");
let body = document.querySelector("body");
let marquees = document.querySelectorAll(".marquee__inner");

// Custom Cursor
function cursor(e) {
    customCursor.style.top = e.pageY - 24 + "px";
    customCursor.style.left = e.pageX - 24 + "px";
}

window.addEventListener("mousemove", cursor);


// Hover effects
textContainer.addEventListener("mouseover", () => {
    cursorCircle.style.border = '1px dashed red';
    cursorCircle.classList.toggle('rotate');
    cursorCircle.style.backgroundColor = 'rgba(255,0,0,0.25)';
    customCursor.style.transform = 'scale(3)';
    body.style.background = 'url("https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/carbon_fibre.png")';
    body.style.color = "#edeee9";

    marquees.forEach(item => {
        item.style.opacity = "1";
    })
})

textContainer.addEventListener("mouseout", () => {
    cursorCircle.style.border = '1px solid #111';
    cursorCircle.classList.toggle('rotate');
    cursorCircle.style.backgroundColor = 'rgba(0,0,0,0)';
    customCursor.style.transform = 'scale(1)';
    body.style.background = 'url("https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/white_carbon.png")';
    body.style.color = "#303030";

    marquees.forEach(item => {
        item.style.opacity = "0";
    })
})