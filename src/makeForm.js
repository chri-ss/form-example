const content = document.querySelector("#content");
const form = document.createElement("form");

const makeForm = () => {
  const fields = ["Email", "Country", "ZIP", "Pass", "Confirm"];

  fields.forEach((field) => {
    const fieldSet = document.createElement("fieldset");
    fieldSet.setAttribute('data-field', field);

    const label = document.createElement("label");
    label.textContent = field;

    const input = document.createElement("input");
    input.classList.add(field);
    input.required = true;
    if(field === 'Email') {
      input.type = 'email';
    } else if (field === 'Country') {
      input.pattern = '[a-zA-Z]*';
    } else if(field === 'ZIP') {
      input.pattern = '\d{5}';
    } else if (field === 'Pass') {
      input.pattern = '[a-zA-Z\d]*';
    } else if(field === 'Confirm') {
      input.pattern = '[a-zA-Z\d]*';
    }

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
