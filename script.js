document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/Hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===========================
    // 3D Flip Toggle Logic
    // ===========================
    const modeBtn = document.getElementById('mode-toggle-btn');
    const card3D = document.querySelector('.card-3d');
    const btnIcon = modeBtn.querySelector('.btn-icon');
    const btnText = modeBtn.querySelector('.btn-text');

    if (modeBtn && card3D) {
        modeBtn.addEventListener('click', () => {
            // Toggle Class
            card3D.classList.toggle('flipped');

            // Check state
            const isFlipped = card3D.classList.contains('flipped');

            // Update UI
            if (isFlipped) {
                // Now showing Games (Back Face)
                // Button should offer to go back to Tests
                btnIcon.textContent = '🧠';
                btnText.textContent = '테스트 모음';
                modeBtn.setAttribute('aria-label', '테스트 모드로 전환');
                modeBtn.setAttribute('aria-pressed', 'true');
            } else {
                // Now showing Tests (Front Face)
                // Button should offer to go to Games
                btnIcon.textContent = '🎮';
                btnText.textContent = '게임 모음';
                modeBtn.setAttribute('aria-label', '게임 모드로 전환');
                modeBtn.setAttribute('aria-pressed', 'false');
            }
        });
    }
});
