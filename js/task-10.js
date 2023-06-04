function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const createColl = document.querySelector("button[data-create]");
const destroyColl = document.querySelector("button[data-destroy]");
const currentNumber = document.querySelector("#boxes");

inputNumber.addEventListener("change", numberOfBoxes);
let amount = 0;

function numberOfBoxes(event) {
  amount = event.target.value;
  console.log(amount);
}

let divEl = document.createElement("div");
const devWidth = 30;
const devHeight = 30;
divEl.style.width = `${devWidth}px`;
divEl.style.height = `${devHeight}px`;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement("div");
    const divSize = 30 + i * 10;
    divBox.style.width = `${divSize}px`;
    divBox.style.height = `${divSize}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    currentNumber.append(divBox);
  }
}

function onCreateBtnClick() {
  return createBoxes(amount);
}

createColl.addEventListener("click", onCreateBtnClick);

function destroyBoxes() {
  currentNumber.innerHTML = "";
}
destroyColl.addEventListener("click", destroyBoxes);
