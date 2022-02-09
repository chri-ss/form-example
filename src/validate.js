import { errorMessage } from "./errorMessage";

const validate = (field) => {
  const errorDiv = field.nextSibling;
  const passInput = document.querySelector(".Pass");
  if (
    !field.validity.valid ||
    (field.className === "Confirm" && field.value !== passInput.value)
  ) {
    errorDiv.textContent = errorMessage(field);
    errorDiv.classList.remove("hidden");
    field.style.border = "1px solid rgb(228, 53, 53)";
  } else {
    errorDiv.classList.add("hidden");
    field.style.border = "1px solid black";
  }
};

const validationListener = () => {
  const form = document.querySelector("form");
  form.addEventListener("focusout", (e) => {
    if (e.target.tagName === "INPUT") {
      validate(e.target);
    }
  });
};

const submitValidationListener = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach((input) => {
      validate(input);
      if (!input.validity.valid) {
        e.preventDefault();
      }
    });
  });
};

export { validationListener, submitValidationListener };
