// document.addEventListener('DOMContentLoaded', function () {
//     const searchPanel = document.querySelector('.searching-panel');
//     let isAnimated = false;

//     function revealOnScroll() {
//         if (isAnimated) return;

//         const searchPanelTop = searchPanel.getBoundingClientRect().top;
//         const triggerBottom = window.innerHeight * 0.8;

//         if (searchPanelTop < triggerBottom) {
//             searchPanel.classList.add('reveal');
//             isAnimated = true;
//             // Optional: Remove scroll listener after animation
//             window.removeEventListener('scroll', revealOnScroll);
//         }
//     }

//     window.addEventListener('scroll', revealOnScroll);
//     // Check initial position
//     revealOnScroll();
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const searchPanel = document.querySelector('.searching-panel');

//     // Add initial hidden class
//     searchPanel.classList.add('hidden');

//     function revealSearchPanel() {
//         // Remove hidden class and add reveal class
//         searchPanel.classList.remove('hidden');
//         searchPanel.classList.add('reveal');
//     }

//     // Reveal after a short delay
//     setTimeout(revealSearchPanel, 500);
// });
ScrollReveal().reveal('.searching-panel', {
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 1200
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutGrid = document.querySelector('.about-grid');
    const aboutCards = document.querySelectorAll('.about-card');
    let isAnimated = false;

    function revealOnScroll() {
        if (isAnimated) return;

        const triggerBottom = window.innerHeight * 0.8;
        const gridTop = aboutGrid.getBoundingClientRect().top;

        if (gridTop < triggerBottom) {
            aboutGrid.classList.add('reveal');
            aboutCards.forEach(card => card.classList.add('reveal'));
            isAnimated = true;

            // Optional: Remove scroll listener after animation
            window.removeEventListener('scroll', revealOnScroll);
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    // Check initial position
    revealOnScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.deals-tabs .btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding content
            const targetId = button.getAttribute('data-id');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dealsContainer = document.querySelector('.section-container');
    const dealsTabs = document.querySelector('.deals-tabs');
    const dealsCards = document.querySelectorAll('.deals-card');
    let isAnimated = false;

    function revealOnScroll() {
        if (isAnimated) return;

        const triggerBottom = window.innerHeight * 0.8;
        const containerTop = dealsContainer.getBoundingClientRect().top;

        if (containerTop < triggerBottom) {
            dealsContainer.classList.add('reveal');
            dealsTabs.classList.add('reveal');

            dealsCards.forEach(card => {
                card.classList.add('reveal');
            });

            isAnimated = true;
            // Optional: Remove scroll listener after animation
            window.removeEventListener('scroll', revealOnScroll);
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    // Check initial position
    revealOnScroll();
});
/* filepath: /c:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/script.js */

// Scroll reveal function
function revealOnScroll() {
    const elements = document.querySelectorAll('.choose-container, .choose-img, .choose-text, .choose-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) { // Reveal when element is 85% in view
            element.classList.add('reveal');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Initial check for elements in view
window.addEventListener('load', revealOnScroll);


/* filepath: /c:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/scroll.js */

// Use Intersection Observer for better performance
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.choose-card');
            cards.forEach((card, index) => {
                card.style.setProperty('--i', index + 1);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe the choose-cards container
document.querySelector('.choose-cards') &&
    observer.observe(document.querySelector('.choose-cards'));

/* filepath: /C:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/scroll.js */

// ...existing code...

// Subscribe section reveal
ScrollReveal().reveal('.subscribe-container', {
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.subscribe-content', {
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 600
});

ScrollReveal().reveal('.subscribe-image', {
    origin: 'right',
    distance: '60px',
    duration: 2500,
    delay: 600
});

// Reveal form elements separately
ScrollReveal().reveal('.subscribe-header', {
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 800
});

ScrollReveal().reveal('.subscribe-desc', {
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 1000
});

ScrollReveal().reveal('.subscribe-content form', {
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    delay: 1200
});
ScrollReveal().reveal('.Testimonials-customers', {
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    delay: 1200
});
ScrollReveal().reveal('.footer-container', {
    origin: 'bottom',
    distance: '30px',
    duration: 2000,
    delay: 1200
});

/* filepath: /C:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/script.js */
// const slider = document.querySelector('.Testimonials-customers');
// let scrollAmount = 0;

// function slideTestimonials() {
//     const cardWidth = document.querySelector('.Testimonials-customer').offsetWidth;
//     const totalScrollWidth = slider.scrollWidth - slider.clientWidth;
//     scrollAmount += cardWidth + 20; // Card width + gap

//     if (scrollAmount > totalScrollWidth) {
//         scrollAmount = 0;
//     }

//     slider.style.transform = `translateX(-${scrollAmount}px)`;
// }

// setInterval(slideTestimonials, 3000);
// const slider = document.querySelector('.Testimonials-customers');
// const cards = document.querySelectorAll('.Testimonials-customer');
// let scrollAmount = 0;
// let slideInterval;

// function slideTestimonials() {
//     const cardWidth = document.querySelector('.Testimonials-customer').offsetWidth;
//     const totalScrollWidth = slider.scrollWidth - slider.clientWidth;
//     scrollAmount += cardWidth + 20; // Card width + gap

//     if (scrollAmount > totalScrollWidth) {
//         scrollAmount = 0;
//     }

//     slider.style.transform = `translateX(-${scrollAmount}px)`;
// }

// function startSliding() {
//     slideInterval = setInterval(slideTestimonials, 3000);
// }

// function stopSliding() {
//     clearInterval(slideInterval);
// }

// // Start sliding when the page loads
// startSliding();

// // Pause sliding on hover and resume when the mouse leaves
// cards.forEach(card => {
//     card.addEventListener('mouseover', stopSliding);
//     card.addEventListener('mouseleave', startSliding);
// });
