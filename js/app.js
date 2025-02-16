// Sticky navbar 
let header = document.querySelector("header")
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

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

// cart ccounter 
let cartBtns = document.querySelectorAll(".cart");
let cartCounter = document.getElementById("cart-counter");
let cartIcon = document.querySelector("header .icons").firstElementChild;
let cCounter = 0;
cartBtns.forEach((btn) => {
  btn.onclick = (e) => {
    cartCounter.innerHTML = ++cCounter;
    e.preventDefault();
    if(cCounter !== "0") {
      cartCounter.style.display ="block";
      cartIcon.style.color = "var(--primary-color)";
    }
  }
})

// featured products 
function viewImage(featuredImages, mainImage) {
  document.querySelectorAll(featuredImages).forEach(image => {
    image.addEventListener("click", () => {
      let imageSrc = image.getAttribute("src");
      document.querySelector(mainImage).src = imageSrc;
    })
  })
}
viewImage(".featured-image-1", ".main-image-1")
viewImage(".featured-image-2", ".main-image-2")
viewImage(".featured-image-3", ".main-image-3")


// footer 
let year = new Date().getFullYear();
let footerYear = document.querySelector(".credit").lastElementChild;
footerYear.innerHTML = year;