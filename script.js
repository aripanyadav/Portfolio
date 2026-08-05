// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.25)";
        header.style.boxShadow = "none";
    }
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{
    if(topBtn){
        if(window.scrollY>500){
            topBtn.style.opacity="1";
            topBtn.style.pointerEvents="auto";
        }else{
            topBtn.style.opacity="0";
            topBtn.style.pointerEvents="none";
        }
    }
});

if(topBtn){
    topBtn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

if(contactForm){
    contactForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        contactForm.reset();
    });
}

// ===============================
// BUTTON HOVER EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        btn.style.transform="translateY(-6px)";
    });
    btn.addEventListener("mouseleave",()=>{
        btn.style.transform="translateY(0)";
    });
});

// ===============================
// TYPING EFFECT (FIXED)
// ===============================

// Yahan se "Currently Learning Data Science" hata diya gaya hai
const roles = [
    "Frontend Developer",
    "UI/UX Designer"
];

const typingElement = document.querySelector(".hero h2");

if (typingElement) {
    let roleIndex = 0;
    setInterval(() => {
        typingElement.innerHTML = roles[roleIndex];
        roleIndex++;
        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }
    }, 3000);
}

// ===============================
// PARALLAX EFFECT
// ===============================

document.addEventListener("mousemove", (e) => {
    const sun = document.querySelector(".sun");
    if (!sun) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    sun.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

// ===============================
// RANDOM STAR TWINKLE
// ===============================

setInterval(() => {
    const stars = document.querySelector(".stars");
    if (stars) {
        stars.style.opacity = Math.random() * 0.4 + 0.2;
    }
}, 1500);

// ===============================
// YEAR UPDATE
// ===============================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Aripan Yadav. All Rights Reserved.`;
}

// ===============================
// SKILL BAR ANIMATION
// ===============================

const skillBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fillBar 2s ease forwards";
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function(e){
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        const rect = this.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===============================
// SCROLL PROGRESS
// ===============================

const progress = document.createElement("div");
progress.className = "scroll-progress";
document.body.appendChild(progress);

window.addEventListener("scroll",()=>{
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const current = window.scrollY;
    progress.style.width = (current/total)*100+"%";
});

console.log("Portfolio Loaded Successfully 🚀");
