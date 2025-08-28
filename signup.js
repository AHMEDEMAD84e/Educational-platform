document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("من فضلك املأ كل الحقول");
    return;
  }

  if (password.length < 4) {
    alert("كلمة المرور يجب أن تكون 4 أحرف/أرقام على الأقل");
    return;
  }

  if (password !== confirmPassword) {
    alert("كلمة المرور غير متطابقة");
    return;
  }

  
  alert("تم إنشاء الحساب بنجاح ✅");
  window.location.href = "login.html"; 
});
