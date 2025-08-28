// Dark Mode Toggle
const toggleDarkMode = document.getElementById("toggleDarkMode");
toggleDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleDarkMode.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Scroll Animations
document.addEventListener("scroll", () => {
  const screenPos = window.innerHeight / 1.2;

  // Animation للكورسات (لو موجودة)
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < screenPos) card.classList.add("animate__animated", "animate__fadeInUp");
  });

  // Animation للمدرسين
  const teachers = document.querySelectorAll(".teacher-card");
  teachers.forEach(teacher => {
    const pos = teacher.getBoundingClientRect().top;
    if (pos < screenPos && !teacher.classList.contains("show")) {
      teacher.classList.add("show", "animate__animated", "animate__fadeInUp");
    }
  });
});

// Hero Animation عند فتح الصفحة
window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero h1");
  heroText.classList.add("animate__animated", "animate__fadeInDown");
});
