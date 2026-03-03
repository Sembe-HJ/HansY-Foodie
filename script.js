// Dark/Light Mode
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme","light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme","dark");
    }
});

// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
}

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            section.classList.add("active");
        }
    });
});

// Testimonials Auto Slide
let slides = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active-slide");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active-slide");
}, 4000);




// Filters
const filterBtns = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        menuItems.forEach(item => {
            if(filter === "all" || item.classList.contains(filter)){
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Popup
const orderBtns = document.querySelectorAll(".order-btn");
const popup = document.getElementById("popup");

orderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 2000);
    });
});