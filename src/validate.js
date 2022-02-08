import { errorMessage } from "./errorMessage";

const validate = (field) => {
  const errorDiv = field.nextSibling;
  if (!field.validity.valid) {
    errorDiv.textContent = errorMessage(field);
    errorDiv.classList.remove("hidden");
    field.style.border = "1px solid rgb(228, 53, 53)";
  } else {
    errorDiv.classList.add("hidden");
    field.style.border = '1px solid black';
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

export { validationListener };
