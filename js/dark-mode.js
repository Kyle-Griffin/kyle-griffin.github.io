let darkModeToggle = document.querySelector(".toggle-slot");
let bodyClasses = document.querySelector("body");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
