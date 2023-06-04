const sizeInput = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

sizeInput.addEventListener("input", fontSizeChanger);
function fontSizeChanger() {
  sizeText.style.fontSize = `${sizeInput.value}px`;
  //   console.log(sizeInput.value);
}
