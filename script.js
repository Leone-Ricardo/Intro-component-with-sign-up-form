const exclamation = document.getElementsByClassName("error");
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formError = document.getElementsByClassName("form-error");
const input = document.getElementsByTagName("input");
const successMessage = document.querySelector(".success-message");

/* validation*/
function formValidation(event) {
  /*for loop for all input fields except submit input, so it is 4*/
  for (i = 0; i < 4; i++) {
    /*clear the form*/
    input[i].classList.remove("error");
    formError[i].style.display = "none";

    /*email validation*/
    if (!email.validity.valid) {
      formError[2].style.display = "block";
      email.classList.add("error");
      event.preventDefault();
    }

    /*validation of other fields*/
    if (
      (input.type != "email" || input.type != "submit") &&
      input[i].value == ""
    ) {
      formError[i].style.display = "block";
      input[i].classList.add("error");
      event.preventDefault();
    }
  }

  // Check if all fields are valid and show success message
  if (
    firstName.validity.valid &&
    lastName.validity.valid &&
    email.validity.valid &&
    password.validity.valid
  ) {
    successMessage.style.display = "block";
    event.preventDefault(); // Prevent form submission (Optional: Remove this line if you want the form to be submitted after showing the success message)
  }
}

/*event listener on button, call the formValidation function*/
form.addEventListener("submit", formValidation, false);
