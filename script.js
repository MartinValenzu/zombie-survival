
// SISTEMA DE CARRUSELES DE LA GALERÍA

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = carousel.querySelectorAll(".gallery-slide");
    const previousButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");

    const counter = carousel.nextElementSibling;
    let currentIndex = 0;

    function showSlide(index) {
        slides[currentIndex].classList.remove("active");

        currentIndex = (index + slides.length) % slides.length;

        slides[currentIndex].classList.add("active");

        counter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }

    previousButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });
});
