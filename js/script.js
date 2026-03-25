// ==================== SCROLL EFFECTS ====================
const elements = document.querySelectorAll(".projectCard, .skillCard");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const goTop = document.querySelector(".goToTop");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // ---- Element fade-in ----
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });

    // ---- Active nav link ----
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    // ---- Go to top button ----
    if (scrollY > 300) {
        goTop.style.opacity = "1";
        goTop.style.pointerEvents = "auto";
    } else {
        goTop.style.opacity = "0";
        goTop.style.pointerEvents = "none";
    }
});

// ==================== TYPING EFFECT ====================
const text = ["Laravel Builder", "Full Stack Developer", "React Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const element = document.querySelector(".bannerLeft h1 span");
    if (!element) return; // prevent errors if element not found

    if (!isDeleting) {
        currentText = text[i].substring(0, j + 1);
        j++;
    } else {
        currentText = text[i].substring(0, j - 1);
        j--;
    }

    element.innerHTML = currentText;

    let speed = isDeleting ? 50 : 100;

    // Pause at end of word before deleting
    if (!isDeleting && j === text[i].length) {
        speed = 800; // shorter pause for smoother feel
        isDeleting = true;
    }

    // Move to next word after deleting
    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
        speed = 300;
    }

    setTimeout(type, speed);
}

type();