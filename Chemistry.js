// ================== Dark Mode ==================
const toggleBtn = document.getElementById("darkToggle");

// شوف لو فيه وضع محفوظ قبل كدا
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  // حفظ الاختيار
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ================== Animation on Scroll ==================
const elements = document.querySelectorAll(".animate-on-scroll");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach((el, i) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom && !el.classList.contains("animate__animated")) {
      const delay = i * 0.15; // تأخير بسيط حسب ترتيب العنصر
      el.style.animationDelay = `${delay}s`;
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();

// ================== Smooth Scroll ==================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
