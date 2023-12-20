// main.js

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.main');
    if (mainContent) {
        setTimeout(() => {
            mainContent.classList.add('reveal');
        }, 500);
    }
});
