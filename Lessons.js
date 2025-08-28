// Dark mode toggle
const toggleBtn = document.getElementById("darkToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Scroll animation
const elements = document.querySelectorAll(".animate");
function checkScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
