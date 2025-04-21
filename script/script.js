// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href").trim());
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Show More Projects
document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreProjects");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function() {
            document.querySelectorAll(".project-card.hidden").forEach(card => {
                card.classList.remove("hidden");
            });
            this.style.display = "none";
        });
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close menu when a link is clicked
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});