function hideContainer() {
  document
    .querySelectorAll(".hide")
    .forEach((element) => (element.style.display = "none"));
}

function showContainer() {
  document
    .querySelectorAll(".hide")
    .forEach((element) => (element.style.display = ""));
}

function checkScreenWidth() {
  if (window.innerWidth > 768) {
    showContainer();
  }
}
window.addEventListener("resize", checkScreenWidth);
checkScreenWidth();
