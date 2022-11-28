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