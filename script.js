const bgImage = document.getElementById("header-bg");
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
    passwordFeedback.innerText = "Password must be at least 3 characters";
    passwordFeedback.style.opacity = "1";
    password.classList.remove("valid", "default");
    password.classList.add("invalid");
    passwordConfirm.classList.remove("valid", "invalid");
    passwordConfirm.classList.add("default");
    passwordConfirmFeedback.style.opacity = "0";
  }
  else {
    password.classList.add("valid");
    passwordFeedback.style.opacity = "0";
    if (password.value === passwordConfirm.value) {
      passwordConfirm.classList.remove("invalid", "default");
      passwordConfirm.classList.add("valid");
      passwordConfirmFeedback.style.opacity = "0";
    }
    else {
      passwordConfirm.classList.remove("valid", "default");
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
  if (password.value === "" || password.value.length < 3) {
    passwordConfirm.classList.remove("valid", "invalid");
    passwordConfirm.classList.add("default");
    passwordConfirmFeedback.style.opacity = "0";
  }
  else if (passwordConfirm.value === "") {
    passwordConfirmFeedback.style.opacity = "0";
  }
  else {
    if (passwordConfirm.value !== password.value) {
      passwordConfirm.classList.remove("valid", "default");
      passwordConfirm.classList.add("invalid");
      passwordConfirmFeedback.innerText = "Password does not match";
      passwordConfirmFeedback.style.opacity = "1";
    } else {
      passwordConfirm.classList.remove("invalid", "default");
      passwordConfirm.classList.add("valid");
      passwordConfirmFeedback.style.opacity = "0";
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