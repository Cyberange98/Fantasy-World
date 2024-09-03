// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.animated-image');
    
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.animation = "float 2s ease-in-out infinite";
        });

        image.addEventListener('mouseout', () => {
            image.style.animation = "none";
        });
    });
});

// Animation keyframes in CSS

