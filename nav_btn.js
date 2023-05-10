// //For Active links//
// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav a').
// forEach (link => {
//     if(link.href.includes(`${activepage}`)){
//         link.classList.add(`active`);
//     }
// })





const primaryNav = document.querySelector("#nav_btn");
const navToggle = document.querySelector (".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
} );

let toggle = document.querySelector(".toggle");


function Animatedtoggle(){
    toggle.classList.toggle("active");
}


//Scroll At Testimonial Section
function scrolll() {
    var leftMove = document.querySelector(".testimonials");
    leftMove.scrollBy(-350, 0)
}
function scrollr() {
    var RightMove = document.querySelector(".testimonials");
    RightMove.scrollBy(350, 0)
}

// FOR ANIMATION
const headLine = new SplitType('h1')
const myText2 = new SplitType('p', {charClass:'char2'})
var tl = gsap.timeline({defaults: {ease: "Expo.easeInOut"}})

tl.from('.char', {
    y: -100,
    stagger: 0.05,
    delay: 1
})
.from('.char2', {
    y: -100,
    stagger: 0.05,
    duration: .6
}, "-=1.2")
.to('h1,p', {
    y: 130,
    delay: .4,
    duration: 1.4
})