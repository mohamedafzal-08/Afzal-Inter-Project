// js/main.js

// Mobile menu toggle (index.html)
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Signup form handling (signup.html)
const signupForm = document.getElementById("signup-form");
const formMessage = document.getElementById("form-message");

if (signupForm && formMessage) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault(); // backend illa so prevent real submit

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const password = document.getElementById("password")?.value;

    if (!name || !email || !password) {
      formMessage.textContent = "Please fill all the fields properly.";
      formMessage.className = "text-[11px] text-center text-red-500";
      return;
    }

    if (password.length < 6) {
      formMessage.textContent = "Password should be at least 6 characters.";
      formMessage.className = "text-[11px] text-center text-red-500";
      return;
    }

    // Simple success message
    formMessage.textContent = "Signup successful! (Demo only)";
    formMessage.className = "text-[11px] text-center text-emerald-400";

    signupForm.reset();
  });
}