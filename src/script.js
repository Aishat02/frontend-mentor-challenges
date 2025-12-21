async function generateAdvice() {
  document.querySelector(".dice").classList.toggle("active");
  let adviceId = document.querySelector("h1");
  let adviceText = document.querySelector(".advice-text");
  let toast = document.querySelector(".toast");
  let adviceApi = "https://api.adviceslip.com/advice";

  try {
    let response = await axios.get(adviceApi);
    let adviceData = response.data.slip;

    document.querySelector(".dice").classList.remove("active");

    adviceId.innerHTML = `Advice #${adviceData.id}`;
    adviceText.innerHTML = `“${adviceData.advice}”`;
  } catch (error) {
    document.querySelector(".dice").classList.remove("active");
    toast.classList.add("active");
    toast.innerHTML = `${error.message}`;

    setTimeout(() => {
      toast.classList.remove("active");
    }, 10000);
    clearTimeout();
  }
}

document.addEventListener("DOMContentLoaded", generateAdvice);
