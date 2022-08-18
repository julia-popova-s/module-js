const validateEmail = function (email) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
};
const sectionReg = document.querySelector(".registration");
const sectionLogin = document.querySelector(".login");
const formReg = sectionReg.querySelector("#reg-form");
const inputs = formReg.querySelectorAll(".login-form__input");
const labels = formReg.querySelectorAll(".login-form__label");
const buttonReg = formReg.querySelector(".login-form__btn");
const alerts = formReg.querySelectorAll(".login-form__alert");
let loginForm = sectionLogin.querySelector("#login-id");
let loginDetails = loginForm.querySelectorAll(".login-form__input");
const toAuthorization = formReg.querySelector(".login-form__autho");
const toRegistration = loginForm.querySelector(".login-form__reg");

const checkbox = formReg.querySelector(".checkbox");
const checkboxMark = formReg.querySelector(".checkbox__mark");
const alertCheckbox = alerts[2];
const userEmail = inputs[0];
const userPassword = inputs[1];

const userData = [];

const addClass = (input, classInput, label, classLabel) => {
  input.classList.add(classInput);
  label.classList.add(classLabel);
};

const removeClass = (item, classItem) => {
  item.classList.remove(classItem);
};
const addMessage = (message, alert) => {
  alert.innerText = message;
};

//для проверки формы
userEmail.value = "emma658@mail.ru";
userPassword.value = "pDhIu0IUdb";
sectionReg.classList.add("visible");
sectionReg.classList.remove("hidden");
sectionLogin.classList.add("hidden");
sectionLogin.classList.remove("visible");

toAuthorization.addEventListener("click", () => {
  sectionReg.classList.remove("visible");
  sectionReg.classList.add("hidden");
  sectionLogin.classList.remove("hidden");
  sectionLogin.classList.add("visible");
});
toRegistration.addEventListener("click", () => {
  sectionReg.classList.remove("hidden");
  sectionReg.classList.add("visible");
  sectionLogin.classList.remove("visible");
  sectionLogin.classList.add("hidden");
});
formReg.addEventListener("input", (e) => {
  removeClass(e.target, "border_red");
  if (e.target.name === "email") {
    userEmail.value = e.target.value.trim();
    removeClass(labels[0], "color_red");
    addMessage("", alerts[0]);
  } else if (e.target.name === "password") {
    userPassword.value = e.target.value.trim().replace(" ", "");
    removeClass(labels[1], "color_red");
    addMessage("", alerts[1]);
  }
});
const validateInputs = (inputs, labels, alerts) => {
  inputs.forEach((item, i) => {
    if (item.value === "") {
      addClass(item, "border_red", labels[i], "color_red");
      addMessage("Поле обязательно для заполнения", alerts[i]);
    } else {
      addMessage("", alerts[i]);
    }
  });
  if (!validateEmail(inputs[0].value) && inputs[0].value != "") {
    addClass(inputs[0], "border_red", labels[0], "color_red");
    addMessage("Email невалидный", alerts[0]);
  }
  if (inputs[1].value.length < 8 && inputs[1].value != "") {
    addClass(inputs[1], "border_red", labels[1], "color_red");
    addMessage("Пароль должен содержать как минимум 8 символов", alerts[1]);
  }
};
const validateCheckbox = (checkbox, checkboxMark, alert) => {
  if (!checkboxMark.checked) {
    addClass(checkbox, "color_red", checkboxMark, "border_red");
    addMessage("Поле обязательно для заполнения", alert);
  } else {
    addMessage("", alert);
  }

  checkboxMark.addEventListener("change", () => {
    removeClass(checkbox, "color_red");
    removeClass(checkboxMark, "border_red");
    addMessage("", alert);
  });
};
buttonReg.addEventListener("click", (e) => {
  e.preventDefault();
  validateInputs(inputs, labels, alerts);

  validateCheckbox(checkbox, checkboxMark, alertCheckbox);

  if (validateEmail(userEmail.value) && userPassword.value.length >= 8 && checkboxMark.checked) {
    userData.push(userEmail.value);
    userData.push(userPassword.value);
    loginDetails[0].value = userData[0];
    loginDetails[1].value = userData[1];
    localStorage.setItem(userEmail.value, JSON.stringify(userData));
    console.log("Данные пользователя:");
    // console.log(userData);
    console.log(localStorage.getItem(userEmail.value));
    // console.log(localStorage);
    inputs.forEach((item) => (item.value = ""));
    checkboxMark.checked = false;
    sectionReg.classList.add("hidden");
    sectionReg.classList.remove("visible");
    sectionLogin.classList.add("visible");
    sectionLogin.classList.remove("hidden");
    return userData;
  }
});
