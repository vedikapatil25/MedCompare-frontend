const toggleBtn = document.getElementById("toggleMode");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

img1.addEventListener("click" , () =>{
     window.location.href = "https://pharmeasy.in/health-care/14485";
});
img2.addEventListener("click" , () =>{
    window.location.href = "https://pharmeasy.in/health-care/16202"
});


nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 500, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -500, behavior: "smooth" });
});



