const content = document.querySelector("#content");

const makeForm = () => {
  const fields = [
    "Email",
    "Country",
    "ZIP code",
    "Password",
    "Confirm Password",
  ];
  const form = document.createElement("form");
  content.appendChild(form);
};

export { makeForm };
