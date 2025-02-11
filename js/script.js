const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or default to light theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Update icons based on current theme
function updateThemeIcons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');

    sunIcon.style.display = isDark ? 'none' : 'block';
    moonIcon.style.display = isDark ? 'block' : 'none';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons();
});

// Initialize icons on page load
updateThemeIcons();


/* filepath: /C:/Users/suraj/OneDrive/Desktop/java Scrpit/Project/Car Rental/js/script.js */
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change hamburger icon to close icon
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});



// Main 


