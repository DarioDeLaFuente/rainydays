const form = document.querySelector("form");
const message = document.querySelector("#message");
//
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
//
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
//
const contactMessage = document.querySelector("#contact-message");
const contactError = document.querySelector("#contact-error");
//

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 1, 0) === true) {
    fullNameError.style.display = "none";
    document.querySelector("#name").classList.remove("error-frame");
  } else {
    fullNameError.style.display = "block";
    document.querySelector("#name").classList.add("error-frame");
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    document.querySelector("#email").classList.remove("error-frame");
  } else {
    emailError.style.display = "block";
    document.querySelector("#email").classList.add("error-frame");
  }
  if (checkLength(contactMessage.value, 10, 0) === true) {
    contactError.style.display = "none";
    document.querySelector("#contact-message").classList.remove("error-frame");
  } else {
    contactError.style.display = "block";
    document.querySelector("#contact-message").classList.add("error-frame");
  }

  if (
    checkLength(fullName.value, 1, 0) &&
    validateEmail(email.value) &&
    checkLength(contactMessage.value, 10, 0) === true
  ) {
    message.innerHTML = '<div class="message">Your message has been sent</div>';
    form.reset();
  } else {
    message.innerHTML = "";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
