const track = document.querySelector(".track");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index) {
    current = index;

    track.style.transform = `translateX(-${700 * current}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});