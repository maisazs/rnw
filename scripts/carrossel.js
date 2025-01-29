// carrosssel
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(document.querySelectorAll(".carousel-item"));
  let isTransitioning = false;

  const updateClasses = () => {
    items.forEach((item, index) => {
      if (index === 1) {
        item.classList.add("scale-[1]", "opacity-100");
        item.classList.remove("scale-[0.85]", "opacity-70");
      } else {
        item.classList.add("scale-[0.85]", "opacity-70");
        item.classList.remove("scale-[1]", "opacity-100");
      }
    });
  };

  const moveCarousel = () => {
    if (isTransitioning) return;
    isTransitioning = true;

    carousel.style.transition = "transform 1s ease-in-out";
    carousel.style.transform = "translateX(-33.33%)";

    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";

      const firstItem = items.shift();
      items.push(firstItem);
      carousel.appendChild(firstItem);

      updateClasses();
      isTransitioning = false;
    }, 500);
  };

  updateClasses();

  setInterval(moveCarousel, 3000);
});
