/* filepath: /c:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/script.js */

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section, .main_container, .deals');
    const navLinks = document.querySelectorAll('.nav_links a');

    // Function to update active link
    function updateActiveLink() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to target
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            // Close mobile menu if open
            const navLinks = document.getElementById('nav-links');
            navLinks.classList.remove('show');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);
});

/* filepath: /c:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/navigation.js */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, div[id]');
    const navLinks = document.querySelectorAll('.nav_links a');

    // Add active class to nav links on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add active class on click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Set active class for current section on page load
    function setInitialActive() {
        const hash = window.location.hash || '#home';
        const activeLink = document.querySelector(`.nav_links a[href="${hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    setInitialActive();
});