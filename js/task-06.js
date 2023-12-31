const input = document.querySelector("#validation-input");

input.addEventListener("blur", validateInput);

function validateInput(event) {
  const exactLength = Number(event.currentTarget.dataset.length);
  const inputValue = event.currentTarget.value;
  const inputLength = inputValue.length;

  if (inputLength !== exactLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
