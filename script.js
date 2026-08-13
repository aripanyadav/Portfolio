// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}


// =========================================
// CLOSE MOBILE MENU AFTER CLICK
// =========================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("show");
        }

    });

});


// =========================================
// STICKY HEADER
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,0.96)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
        header.style.backdropFilter = "blur(15px)";

    } else {

        header.style.background = "rgba(255,255,255,0.92)";
        header.style.boxShadow = "none";

    }

});


// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    "section, .service-card, .skill-card, .project-card, .contact-box"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});


// =========================================
// SKILL BAR ANIMATION
// =========================================

const skillBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.animation =
                    "fillBar 1.8s ease forwards";

                skillObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.5
    }

);

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


// =========================================
// BACK TO TOP
// =========================================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================================
// SCROLL PROGRESS
// =========================================

const scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    if (!scrollProgress) return;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPosition = window.scrollY;

    const percentage =
        documentHeight > 0
            ? (scrollPosition / documentHeight) * 100
            : 0;

    scrollProgress.style.width = percentage + "%";

});


// =========================================
// PROJECT CARD HOVER
// =========================================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});


// =========================================
// BUTTON RIPPLE EFFECT
// =========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left =
            event.clientX - rect.left + "px";

        ripple.style.top =
            event.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        alert(
            "Thank you! Your message has been received."
        );

        contactForm.reset();

    });

}


// =========================================
// CURRENT YEAR
// =========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} Aripan Yadav. All Rights Reserved.`;

}


// =========================================
// PAGE LOAD
// =========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "🚀 Aripan Yadav Portfolio Loaded Successfully"
    );

});
