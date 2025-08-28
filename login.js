
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("من فضلك املأ كل الحقول");
    return;
  }

  if (email === "student@mail.com" && password === "1234") {
    alert("تم تسجيل الدخول بنجاح ✅");
    window.location.href = "index.html"; 
  } else {
    alert("بيانات غير صحيحة ❌");
  }
});
