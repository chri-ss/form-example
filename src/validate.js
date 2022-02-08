const validate = (field) => {
  const errorDiv = field.nextSibling;
  if(!field.validity.valid) {
    errorDiv.classList.remove('hidden');
  } else {
    errorDiv.classList.add('hidden');
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
