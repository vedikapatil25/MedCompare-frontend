const openBtn = document.getElementById("openPopup");
const popup = document.getElementById("loginPopup");
const overlay = document.getElementById("overlay");

openBtn.onclick = () => {
    popup.style.display = "flex";
    overlay.style.display = "block";
};

overlay.onclick = () => {
    popup.style.display = "none";
    overlay.style.display = "none";
};
function login() {

    fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    })
    .then(res => res.json())
    .then(data => {

        console.log(data);

        // ✅ Save token
        localStorage.setItem("token", data.token);

        alert("Login Successful");

        // Optional: close popup
        popup.style.display = "none";
        overlay.style.display = "none";
    })
    .catch(err => {
        alert("Login failed");
    });
}
function getProfile() {

    fetch("http://localhost:8080/api/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });
}
function adminDashboard() {

    fetch("http://localhost:8080/api/users/admin/dashboard", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });
}