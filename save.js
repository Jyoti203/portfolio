// Smooth scroll animation effect
const cards = document.querySelectorAll(".glass, .skill-card, .project-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = window.scrollY;
    const offset = card.offsetTop - 400;
    if (top > offset) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
