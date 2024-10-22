const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const gallery = document.querySelector('.gallery-list');
const itemsToClone = 9; // Adjust this number based on how many items to clone
const galleryItems = Array.from(gallery.children);

for (let i = 0; i < itemsToClone; i++) {
    const clone = galleryItems[i].cloneNode(true);
    gallery.appendChild(clone);
}

// Adjust the scroll position on the first click if needed
let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    if (scrollPosition === 0) {
        // If at the start, scroll to the last original item
        scrollPosition = gallery.scrollWidth / 2 - gallery.clientWidth;
        gallery.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    } else {
        scrollPosition -= 200; // Scroll left by 200px
        gallery.scrollBy({ left: -200, behavior: 'smooth' });
    }
});

nextButton.addEventListener('click', () => {
    if (scrollPosition >= gallery.scrollWidth / 2) {
        // If at the end, reset to the start
        scrollPosition = 0;
        gallery.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    } else {
        scrollPosition += 200; // Scroll right by 200px
        gallery.scrollBy({ left: 200, behavior: 'smooth' });
    }
});

