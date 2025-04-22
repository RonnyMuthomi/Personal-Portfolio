document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href").trim());
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Show More Projects
    const showMoreBtn = document.getElementById("showMoreProjects");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function() {
            document.querySelectorAll(".project-card.hidden").forEach(card => {
                card.classList.remove("hidden");
            });
            this.style.display = "none";
        });
    }

    // Sidebar toggle
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const navLinks = document.getElementById('nav-links'); // Make sure this exists in your HTML

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.add('active');
            if (navLinks) navLinks.classList.add('show');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            if (navLinks) navLinks.classList.remove('show');
        });
    }

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) navLinks.classList.remove('show');
            if (sidebar) sidebar.classList.remove('active');
        });
    });

    // Close menu if user clicks outside
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (
            navLinks &&
            hamburger &&
            !navLinks.contains(target) &&
            !hamburger.contains(target)
        ) {
            navLinks.classList.remove('show');
        }
    });
});