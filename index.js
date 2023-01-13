const navId = document.getElementById("nav-menu");
const toggleId = document.getElementById("toggle-btn");
const closebtnId = document.getElementById("close-btn")

// Show menu
toggleId.addEventListener("click", () => {
    navId.classList.add("show")
})

// Hide Menu
closebtnId.addEventListener('click', () => {
    navId.classList.remove("show")
})

// Animate on scroll
AOS.init();

// GSAP ANIMATION
gsap.from(".logo", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
});

// TOGGLE BTN
gsap.from(".toggle-btn",{
    opacity: 0,
    y: -10,
    delay: 2.4,
    duration: 1,
});

// CTA BUTTONS
gsap.from(".info-text", {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
});
// TEAM IMAGE
gsap.from(".team-img-wrapper img",{
    opacity: 0,
    y: 20,
    delay: 3,
    duration: 1,
});