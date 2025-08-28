// Animation on scroll
const cards = document.querySelectorAll(".offer-card");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
