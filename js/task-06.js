const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length == 6) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else if (textInput.value.length != 6) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
