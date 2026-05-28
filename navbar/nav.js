// Load navbar HTML
fetch("/navbar/nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    setupNavbar();
    updateNavbar(); // NOW works properly
  });

// ================= NAVBAR SETUP =================
function setupNavbar() {
  const popup = document.getElementById("loginPopup");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("openPopup");

  if (!openBtn) return;

  // Open popup
  openBtn.onclick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      popup.style.display = "flex";
      overlay.style.display = "block";
    }
  };

  // Close popup
  overlay.onclick = () => {
    popup.style.display = "none";
    overlay.style.display = "none";
  };
        // document.getElementById("loginBtn").onclick = login;

  // Login button
  document.getElementById("loginBtn")?.addEventListener("click", login);
  //register button 
  document.getElementById("registerBtn")?.addEventListener("click", register);
  document.getElementById("forgotLink")?.addEventListener("click", showForgotView);
// Profile page redirect
  document.getElementById("profileBtn")?.addEventListener("click", () => {
    window.location.href = "/profile/profile.html";
  });

  // Admin button
document.getElementById("adminBtn")?.addEventListener("click", () => {
  window.location.href = "/admin/admin.html";
});
}




// ================= UPDATE NAVBAR =================
function updateNavbar() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");
const adminBtn = document.getElementById("adminBtn");

  const loginBtn = document.getElementById("openPopup");
const profileNav = document.getElementById("profileNav");
  const profileBtn = document.getElementById("profileBtn");

  if (!loginBtn || !profileNav || !profileBtn) return;

 if (token) {
  loginBtn.style.display = "none";
  profileNav.style.display = "inline-block";

  if (user) {
    profileBtn.innerText = user.charAt(0).toUpperCase();
  }

  // SHOW ADMIN ONLY IF ADMIN
  if (role === "ADMIN") {
    adminBtn.style.display = "block";
  } else {
    adminBtn.style.display = "none";
  }

} else {
  loginBtn.style.display = "inline-block";
  profileNav.style.display = "none";
}
 
}
 
  

// ================= LOGIN =================
function login() {
  fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("Invalid credentials");
    return res.json();
  })
  .then(data => {
    const token = data.token;

    // ✅ Decode JWT
    const payload = JSON.parse(atob(token.split('.')[1]));

    console.log(payload);

    //  Store correct data
    localStorage.setItem("token", token);
    localStorage.setItem("email", payload.sub);
    localStorage.setItem("role", payload.role);

    // Extract name from email
    const name = payload.sub.split("@")[0];
    localStorage.setItem("user", name);

    alert("Login Successful");

    // Close popup
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    updateNavbar();
  })
  .catch(err => {
    console.error(err);
    alert("Login failed");
  });
}

// ================= REGISTER =================
function register() {
  fetch("http://localhost:8080/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("Registered successfully! Now login.");
  })
  .catch(err => {
    console.error(err);
    alert("Registration failed");
  });
}
// ================= PROFILE =================
function getProfile() {
  fetch("http://localhost:8080/api/users/profile", {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(() => alert("Profile failed"));
}

// ================= ADMIN =================
function adminDashboard() {
  fetch("http://localhost:8080/api/users/admin/dashboard", {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(() => alert("Admin failed"));
}
// Add these to navbar.js

function switchMode(mode) {
    const loginTab = document.getElementById("loginTab");
    const registerTab = document.getElementById("registerTab");
    const nameGroup = document.getElementById("nameGroup");
    const submitBtn = document.getElementById("loginBtn");
    const forgotLink = document.getElementById("forgotLink");

    if (mode === "login") {
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        nameGroup.style.display = "none";
        forgotLink.style.display = "block";
        submitBtn.textContent = "Login";
        submitBtn.onclick = login;
    } else {
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        nameGroup.style.display = "flex";
        forgotLink.style.display = "none";
        submitBtn.textContent = "Register";
        submitBtn.onclick = register;
    }
}

function togglePassword() {
    const pwd = document.getElementById("password");
    const btn = document.getElementById("eyeBtn");
    if (pwd.type === "password") {
        pwd.type = "text";
        btn.textContent = "🙈";
    } else {
        pwd.type = "password";
        btn.textContent = "👁️";
    }
}
// ================= FORGOT PASSWORD =================

function showForgotView() {
    // Hide login elements
    document.getElementById("loginTab").parentElement.style.display = "none"; // toggle btns
    document.getElementById("email").closest(".input-group").style.display = "none";
    document.getElementById("password").closest(".input-group").style.display = "none";
    document.getElementById("forgotLink").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";

    // Show forgot view
    document.getElementById("forgotView").style.display = "flex";
    document.getElementById("resetSuccessMsg").style.display = "none";
    document.getElementById("forgotEmail").value = "";
}

function backToLogin() {
    // Show login elements
    document.getElementById("loginTab").parentElement.style.display = "flex"; // toggle btns
    document.getElementById("email").closest(".input-group").style.display = "flex";
    document.getElementById("password").closest(".input-group").style.display = "flex";
    document.getElementById("forgotLink").style.display = "block";
    document.getElementById("loginBtn").style.display = "block";

    // Hide forgot view
    document.getElementById("forgotView").style.display = "none";
}

function sendResetLink() {
    const email = document.getElementById("forgotEmail").value.trim();

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    fetch("http://localhost:8080/api/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
    })
    .then(res => {
        // Always show success (don't reveal if email exists or not)
        document.getElementById("forgotEmail").style.display = "none";
        document.querySelector("#forgotView .otp-btn").style.display = "none";
        document.getElementById("resetSuccessMsg").style.display = "block";
    })
    .catch(err => {
        console.error(err);
        alert("Something went wrong. Try again.");
    });
}