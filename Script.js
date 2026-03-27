const password = document.getElementById("password");
const text = document.getElementById("strength-text");
const bar = document.getElementById("progress-bar");
const generateBtn = document.getElementById("generate");

// 🔐 Password Strength Checker
password.addEventListener("input", () => {
  const val = password.value;
  let score = 0;

  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  if (score <= 1) {
    text.innerText = "❌ Weak Password";
    bar.style.width = "25%";
    bar.style.background = "red";
  } else if (score <= 3) {
    text.innerText = "⚠️ Medium Password";
    bar.style.width = "60%";
    bar.style.background = "orange";
  } else {
    text.innerText = "✅ Strong Password";
    bar.style.width = "100%";
    bar.style.background = "green";
  }
});

// 🔥 Password Generator
generateBtn.addEventListener("click", () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let passwordValue = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    passwordValue += chars[randomIndex];
  }

  password.value = passwordValue;

  // trigger strength check
  password.dispatchEvent(new Event("input"));
});
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggle.innerText = "🙈";
  } else {
    password.type = "password";
    toggle.innerText = "👁️";
  }
});