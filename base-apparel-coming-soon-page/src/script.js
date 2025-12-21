let button = document.querySelector("#button");
button.addEventListener("click", validation);

function validation(x) {
  x.preventDefault();
  document.querySelector("#button").classList.toggle("active");
  document.querySelector("form").classList.toggle("active");
  document.querySelector(".validation-icon").classList.toggle("active");

  let validationIcon = document.querySelector(".validation-icon");
  let display = document.querySelector(".validation-result");
  let formInput = document.querySelector(".email");
  let expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (expression.test(formInput.value)) {
    document.querySelector("form").style.outline = "initial";
    document.querySelector("#button").style.backgroundColor = "var(--SoftRed)";
    validationIcon.style.background =
      "url('./images/person-check.svg') no-repeat";
    display.innerHTML = "Thank you for subscribing!";
    display.style.color = "green";
    formInput.disabled = true;
    button.disabled = true;
  } else {
    document.querySelector("form").style.outline = "2px solid var(--SoftRed)";
    validationIcon.style.background =
      "url('./images/icon-error.svg') no-repeat";
    display.innerHTML = "Please provide a valid email";
  }

  if (document.querySelector("form").classList.contains("active")) {
    display.style.display = "block";
    button.style.display = "block";
    button.style.backgroundColor = "#F7D3D5";
    validationIcon.style.display = "block";
  }
}
