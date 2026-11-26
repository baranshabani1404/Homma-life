// دکمه‌ی همبرگری و پنل منو رو پیدا می‌کنیم
const toggle = document.querySelector(".toggle");
const panel = document.querySelector(".panel");

// با هر کلیک روی دکمه...
toggle.addEventListener("click", function () {
  // کلاس open اضافه می‌شه، یا اگه بود برداشته می‌شه
  toggle.classList.toggle("open");
  panel.classList.toggle("open");
});