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
