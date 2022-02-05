const content = document.querySelector("#content");
const form = document.createElement("form");

const makeForm = () => {
  const fields = [
    "Email",
    "Country",
    "ZIP",
    "Password",
    "Confirm",
  ];

  fields.forEach((field) => {
    const fieldSet = document.createElement("fieldset");
    fieldSet.classList.add(field);

    const label = document.createElement("label");
    label.textContent = field;

    const input = document.createElement("input");

    fieldSet.appendChild(label);
    fieldSet.appendChild(input);
    form.appendChild(fieldSet);
  });

  content.appendChild(form);
};

export { makeForm };
