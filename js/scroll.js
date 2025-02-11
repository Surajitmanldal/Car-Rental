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
document.addEventListener('DOMContentLoaded', function () {
    const searchPanel = document.querySelector('.searching-panel');

    // Add initial hidden class
    searchPanel.classList.add('hidden');

    function revealSearchPanel() {
        // Remove hidden class and add reveal class
        searchPanel.classList.remove('hidden');
        searchPanel.classList.add('reveal');
    }

    // Reveal after a short delay
    setTimeout(revealSearchPanel, 500);
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