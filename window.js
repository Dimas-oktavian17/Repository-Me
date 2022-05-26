let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("blur", "bg-trasnparent", "shadow");
  } else {
    nav.classList.remove("blur", "bg-trasnparent", "shadow");
  }
});

// Panggil fungsi listener pada saat dijalankan
// Lampirkan fungsi listener pada perubahan status
