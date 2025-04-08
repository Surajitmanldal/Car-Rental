const themeToggle = document.getElementById('theme-toggle');
const themeSaved = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', themeSaved);

function updateThemeIcons() {
    // Fix: Corrected the condition syntax
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');

    if (sunIcon && moonIcon) {
        sunIcon.style.display = isDark ? 'none' : 'block';
        moonIcon.style.display = isDark ? 'block' : 'none';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons();
});

// Initial icon update
updateThemeIcons();