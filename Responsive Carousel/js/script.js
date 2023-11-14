// script.js
const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

const carouselItems = [
    "./images/Rambutan.jpg",
    "./images/Blueberry.jpg",
    "./images/strawberry.jpg",
    "./images/Avocado.jpg",
    "./images/Blueberry.jpg",
    "./images/Kiwi.jpg",
];

let currentIndex = 2; // Start with the middle image (strawberry)

function updateCarousel() {
    carouselInner.innerHTML = "";

    for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
        const item = document.createElement("div");
        item.className = "carousel-item";
        item.innerHTML = `<img src="${carouselItems[i]}" alt="Image ${i + 1}">`;

        if (i === currentIndex) {
            item.classList.add("active");
        }

        carouselInner.appendChild(item);
    }
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
    carouselInner.style.transform = `translateX(-33.33%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
    carouselInner.style.transform = `translateX(0)`;
}



nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

updateCarousel();

setInterval(nextSlide, 3000);
