function menu() {
  document.querySelector("body").classList.toggle("active");
  let display = document.querySelector(".hidden-nav");
  display.classList.toggle("active");
  let header = document.querySelector(".header");
  header.classList.toggle("active");
  let container = document.querySelector(".container");
  container.classList.toggle("active");
  let headerText = document.querySelector("header");
  headerText.classList.toggle("active");
  let headerImages = document.querySelector(".header-images");
  headerImages.classList.toggle("active");
    
  let changeImage = document.querySelector("#menu-image");
  changeImage.classList.toggle("active");
  if (changeImage.classList.contains("active")) {
    changeImage.src = "./images/icon-close.svg";
    changeImage.style.height = "40px";
    changeImage.style.paddingRight = "4px";
  } else {
    changeImage.src = "./images/icon-hamburger.svg";
    changeImage.style.height = "32px";
    changeImage.style.paddingRight = "initial";
  }
}
