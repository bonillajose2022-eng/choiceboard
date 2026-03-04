// Simple welcome effect for the choice board.
// You can edit the titles, descriptions, or links directly in index.html if needed.

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".choice-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 * index);
  });
});
