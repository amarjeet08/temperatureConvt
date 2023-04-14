const celInput = document.getElementById("celcius");
const change = document.getElementById("change");
const fahInput = document.getElementById("Fahrenheit");
function changeTemp() {
  let userInput = celInput.value;
  fahInput.value = userInput * 1.8 + 32;
  // return fahInput;
}
