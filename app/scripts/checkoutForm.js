const formpassed = document.querySelector(".checkout_form-passed");

function checkoutFormValidate(event) {
  event.preventDefault();
  let passed = true;
  let name = document.forms["checkoutForm"]["name"].value;
  let email = document.forms["checkoutForm"]["email"].value;
  let address = document.forms["checkoutForm"]["address"].value;
  let zip_code = document.forms["checkoutForm"]["zip_code"].value;

  if (name.trim() == "") {
    document.querySelectorAll("#name + .validate-message")[0].innerHTML =
      displayFormError("A name is required");
    passed = false;
  } else {
    document.querySelectorAll("#name + .validate-message")[0].innerHTML = "";
  }
  if (validateEmail(email.trim()) == "") {
    document.querySelectorAll("#email + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value email"
    );
    passed = false;
  } else {
    document.querySelectorAll("#email + .validate-message")[0].innerHTML = "";
  }
  if (address.trim().length <= 10) {
    document.querySelectorAll("#address + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value with a minimum length of 10"
    );
    passed = false;
  } else {
    document.querySelectorAll("#address + .validate-message")[0].innerHTML = "";
  }
  if (zip_code.trim().length <= 4) {
    document.querySelectorAll("#zip_code + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value with zip code"
    );
    passed = false;
  } else {
    document.querySelectorAll("#zip_code + .validate-message")[0].innerHTML = "";
  }
  if (passed) {
    document.querySelector(".form-container").style.display = "none";
    formpassed.innerHTML = displayFormSuccess(
      "We were unable to process the order due to a technical error on our part."
    );
  }
}

//
function displayFormError(formErrorMessage = "Form unknown error") {
  return `<div class="form-error"><div class="form-error-info">${formErrorMessage}</div></div>`;
}
function displayFormSuccess(formSuccessMessage = "SuccessMessage") {
  return `<div class="form-success"><div class="success-message-text"><p>Oops! 5000-FML</p>${formSuccessMessage}</div><div class="success-message-conteiner"></div></div>`;
}
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
