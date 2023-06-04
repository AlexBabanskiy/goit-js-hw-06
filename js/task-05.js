const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const currentTextOutput = textOutput.textContent;

textInput.addEventListener("input", (event) => {
  textOutput.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
  console.log(event.currentTarget.value);
});

// textInput.addEventListener("input", (event) => {
//   if (event.currentTarget.value === "") {
//     textOutput.textContent = "Anonymous";
//   } else {
//     textOutput.textContent = event.currentTarget.value;
//   }
// });
