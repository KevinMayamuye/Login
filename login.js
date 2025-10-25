// ---------- Form Validation ----------
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    valid = false;
    } else if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
    }

    if (!password.value.trim()) {
    passwordError.textContent = "Password is required.";
    valid = false;
    } else if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
    }

    if (valid) {
    alert("Login successful! (Demo only)");
    form.reset();
    }
});