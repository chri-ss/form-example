const content = document.querySelector("#content");
const form = document.createElement("form");

const makeForm = () => {
  const fields = ["Email", "Country", "ZIP", "Password", "Confirm"];

  fields.forEach((field) => {
    const fieldSet = document.createElement("fieldset");
    fieldSet.setAttribute('data-field', field);

    const label = document.createElement("label");
    label.textContent = field;

    const input = document.createElement("input");
    input.classList.add(field);

    const errorDiv = document.createElement("div");
    errorDiv.textContent = "error";
    errorDiv.classList.add("hidden");

    fieldSet.appendChild(label);
    fieldSet.appendChild(input);
    fieldSet.appendChild(errorDiv);
    form.appendChild(fieldSet);
  });
  const submit = document.createElement("button");
  submit.textContent = "submit";
  submit.type = "submit";
  form.appendChild(submit);
  content.appendChild(form);
  form.noValidate = true;
};

export { makeForm };
