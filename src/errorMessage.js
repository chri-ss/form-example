const errorMessage = (field) => {
  if (field.className === "Email") {
    return "Please enter a valid email";
  } if (field.className === "Country") {
    return "Please enter a country name";
  } if (field.className === "ZIP") {
    return "Please enter a valid ZIP code or your country's equivalent";
  } if (field.className === "Pass") {
    return "Please Enter valid password";
  } if (field.className === "Confirm") {
    return "Please ensure passwords match";
  }
};

export { errorMessage }
