const patterns = {
  Email: /^[a-zA-Zd]@[a-zA-Zd].[a-zA-Z]$/,
  Country: /^[a-zA-Z]$/,
  ZIP: /\d{5}$/,
  Pass: /^[a-zA-Z\d]$/,
};

const validate = (field) => {
  const pattern = patterns[field.classList[0]];
  const errorDiv = field.nextSibling;
  if (field.value === "") {
    errorDiv.classList.remove("hidden");
  } else if (pattern.test(field.value) === false) {
    errorDiv.classList.remove("hidden");
  } else if (errorDiv.classList.contains("hidden")) {
    errorDiv.classList.add("hidden");
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
