// menu bar 
let menu = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// slieder 
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slides = document.querySelectorAll(".slide-container");
let index = 0;
prev.onclick = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};
next.onclick = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}


// featured products 
document.querySelectorAll(".featured-image-1").forEach(image_1 => {
  image_1.addEventListener("click", () => {
    let imageSrc = image_1.getAttribute("src");
    document.querySelector(".main-image-1").src = imageSrc;
  })
})
document.querySelectorAll(".featured-image-2").forEach(image_2 => {
  image_2.addEventListener("click", () => {
    let imageSrc = image_2.getAttribute("src");
    document.querySelector(".main-image-2").src = imageSrc;
  })
})
document.querySelectorAll(".featured-image-3").forEach(image_3 => {
  image_3.addEventListener("click", () => {
    let imageSrc = image_3.getAttribute("src");
    document.querySelector(".main-image-3").src = imageSrc;
  })
})
