const email = document.getElementById("email");
const emailFeedback = document.getElementById("email-feedback");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const passwordFeedback = document.getElementById("password-feedback");
const passwordConfirmFeedback = document.getElementById("password-confirm-feedback");
const createAccountButton = document.getElementById("button-create-account");

email.addEventListener("blur", e => {
  if (email.validity.valid) {
    emailFeedback.style.opacity = "0";
  }
  else {
    emailFeedback.innerText = "A valid email address is required";
    emailFeedback.style.opacity = "1";
  };
  buttonState();
});

password.addEventListener("blur", e => {
  if (password.value === "") {
    passwordFeedback.style.opacity = "0";
  }
  else if (password.value.length < 3) {
    passwordFeedback.innerText = "Password must be longer than 2 characters";
    passwordFeedback.style.opacity = "1";
    password.classList.add("invalid");
    passwordConfirm.classList.remove("valid");
    passwordConfirm.classList.add("default");
  }
  else {
    passwordFeedback.style.opacity = "0";
    if (password.value === passwordConfirm.value) {
      password.classList.add("valid");
      passwordConfirm.classList.remove("invalid");
      passwordConfirm.classList.add("valid");
      passwordConfirmFeedback.style.opacity = "0";
    }
    else {
      password.classList.add("default");
      passwordConfirm.classList.remove("valid");
      passwordConfirm.classList.add("invalid");
      passwordConfirmFeedback.innerText = "Password does not match";
      passwordConfirmFeedback.style.opacity = "1";
    }
  };
  if (passwordConfirm.value === "") {
    passwordConfirmFeedback.style.opacity = "0";
  };
  buttonState();
});

passwordConfirm.addEventListener("blur", e => {
  if (passwordConfirm.value === "") {
    passwordConfirmFeedback.style.opacity = "0";
    password.classList.remove("valid");
  }
  else if (passwordConfirm.value.length < 3) {
    passwordConfirmFeedback.innerText = "Password must be longer than 2 characters";
    passwordConfirmFeedback.style.opacity = "1";
    passwordConfirm.classList.add("invalid");
    password.classList.remove("valid");
  } 
  else {
    if (passwordConfirm.value !== password.value) {
      passwordConfirmFeedback.innerText = "Password does not match";
      passwordConfirmFeedback.style.opacity = "1";
      passwordConfirm.classList.add("invalid");
      password.classList.remove("valid");
      password.classList.add("default");
    } else {
      passwordConfirmFeedback.style.opacity = "0";
      passwordConfirm.classList.remove("invalid");
      passwordConfirm.classList.add("valid");
      password.classList.add("valid");
    }
  };
  buttonState();
});

password.addEventListener("focus", e => {
  password.classList.remove("valid");
  password.classList.remove("invalid");
  passwordFeedback.style.opacity = "0";
});

passwordConfirm.addEventListener("focus", e => {
  passwordConfirm.classList.remove("valid");
  passwordConfirm.classList.remove("invalid");
  passwordConfirmFeedback.style.opacity = "0";
});

function buttonState() {
  if (email.validity.valid && email.value.length > 2 && password.classList.contains("valid") && passwordConfirm.classList.contains("valid")) {
    createAccountButton.removeAttribute("disabled");
  }
  else {
    createAccountButton.setAttribute("disabled", "");
  }
}