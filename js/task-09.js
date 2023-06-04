const bodyEl = document.querySelector("body");
const changerBtn = document.querySelector(".change-color");
const currentColorName = document.querySelector(".color");

changerBtn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  currentColorName.textContent = randomColor;
}
