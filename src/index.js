import "./style.css";
import "./reset.css";
import { makeForm } from "./makeForm";
import { validationListener, submitValidationListener } from "./validate";

makeForm();
validationListener();
submitValidationListener();
