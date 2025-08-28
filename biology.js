// زرار Dark Mode
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Animation on scroll
const elements = document.querySelectorAll(".animate-on-scroll");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
}
window.addEventListener("scroll", checkScroll);
checkScroll();
