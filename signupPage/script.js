// Get the form and input fields
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  // Simple validation
  if (!fullname || !email || !password || !confirm) {
    alert("⚠ Please fill out all fields!");
    return;
  }

  if (password !== confirm) {
    alert("❌ Passwords do not match!");
    return;
  }

  if (password.length < 6) {
    alert("🔒 Password must be at least 6 characters long!");
    return;
  }

  // If everything is valid
  alert(✅ Welcome, ${fullname}! Your account has been created successfully.);
  form.reset(); // Clear the form
});