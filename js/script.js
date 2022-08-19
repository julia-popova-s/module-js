"use strict";
const app = () => {
  const validateEmail = function (email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };
  const sectionReg = document.querySelector(".registration");
  const formReg = sectionReg.querySelector("#reg-form");
  const inputs = formReg.querySelectorAll(".login-form__input");
  const labels = formReg.querySelectorAll(".login-form__label");
  const buttonReg = formReg.querySelector(".login-form__btn");
  const alerts = formReg.querySelectorAll(".login-form__alert");

  const checkbox = formReg.querySelector(".checkbox");
  const checkboxMark = formReg.querySelector(".checkbox__mark");
  const alertCheckbox = alerts[2];
  const userEmail = inputs[0];
  const userPassword = inputs[1];

  //для проверки формы
  userEmail.value = "emma658@mail.ru";
  userPassword.value = "pDhIu0IUdb";

  //форма входа
  const sectionLogin = document.querySelector(".login");
  const loginForm = sectionLogin.querySelector("#login-id");
  const btnInput = loginForm.querySelector(".login-form__btn");
  const loginDetails = loginForm.querySelectorAll(".login-form__input");
  const checkApprovalMark = loginForm.querySelector(".checkbox__mark");
  const alertError = loginForm.querySelector(".login-form__alert");
  const labelsInp = loginForm.querySelectorAll(".login-form__label");
  const userData = {};

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

  //проверка сохранены ли данные в localStorage
  if (localStorage.length === 0) {
    sectionReg.classList.add("visible");
    sectionLogin.classList.add("hidden");
  } else {
    sectionLogin.classList.add("visible");
    sectionReg.classList.add("hidden");
  }

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

  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();

    //валидация inputs
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

    //валидация checkbox

    if (!checkboxMark.checked) {
      addClass(checkbox, "color_red", checkboxMark, "border_red");
      addMessage("Поле обязательно для заполнения", alertCheckbox);
    } else {
      addMessage("", alertCheckbox);
    }

    checkboxMark.addEventListener("change", () => {
      removeClass(checkbox, "color_red");
      removeClass(checkboxMark, "border_red");
      addMessage("", alertCheckbox);
    });

    if (validateEmail(userEmail.value) && userPassword.value.length >= 8 && checkboxMark.checked) {
      userData.email = userEmail.value;
      userData.password = userPassword.value;
      loginDetails[0].value = userData.email;
      loginDetails[1].value = userData.password;
      localStorage.setItem("email", JSON.stringify(userData.email));
      localStorage.setItem("password", JSON.stringify(userData.password));
      console.log("Данные пользователя:");
      console.log(userData);
      inputs.forEach((item) => (item.value = ""));
      checkboxMark.checked = false;
      sectionReg.classList.add("hidden");
      sectionReg.classList.remove("visible");
      sectionLogin.classList.add("visible");
      sectionLogin.classList.remove("hidden");
      return userData;
    }
  });

  //форма входа
  btnInput.addEventListener("click", (e) => {
    e.preventDefault();
    checkForEmptyLines(loginDetails, labelsInp, alertsErrors);
    validateCheckbox(checkApproval, checkApprovalMark, alertsErrors[2]);
    userDB = JSON.parse(localStorage.getItem(loginDetails[0].value));
    console.log("Данные из хранилища");
    console.log(userDB);

    if (
      userDB != null &&
      userDB[0] === loginDetails[0].value &&
      userDB[1] === loginDetails[1].value &&
      checkApprovalMark.checked
    ) {
      addMessage("Вы авторизованы!", alertsErrors[1]);
      userDB.push(checkApprovalMark.checked);
      localStorage.setItem(loginDetails[0].value, JSON.stringify(userDB));
      labelsInp.forEach((item, i) => removeClass(item, "color_red"));
      loginDetails.forEach((item, i) => removeClass(item, "border_red"));
      loginDetails.forEach((item) => (item.value = ""));
      checkApprovalMark.checked = false;
      setTimeout(function () {
        window.location.href = "/pages/main.html";
      }, 2 * 1000);
    }
    if (userDB === null || (userDB[0] === loginDetails[0].value && userDB[1] != loginDetails[1].value)) {
      loginDetails.forEach((item, i) => addClass(item, "border_red", labelsInp[i], "color_red"));
      addMessage("Логин или пароль неверный", alertsErrors[1]);
    }
  });
  btnInput.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("approval", checkApprovalMark.checked);
    if (
      JSON.parse(localStorage.getItem("email")) === loginDetails[0].value &&
      JSON.parse(localStorage.getItem("password")) === loginDetails[1].value
    ) {
      console.log("Вы авторизованы!");
      loginDetails.forEach((item) => (item.value = ""));
      loginDetails.forEach((item, i) => removeClass(item, "border_red", labelsInp[i], "color_red"));
      console.log(JSON.parse(localStorage.getItem("email")), JSON.parse(localStorage.getItem("password")));
      addMessage("Вы авторизованы!", alertError);
      alertError.classList.add("valid");
      checkApprovalMark.checked = false;
    } else if (loginDetails[0].value === "" || loginDetails[1].value === "") {
      alertError.classList.remove("valid");
      loginDetails.forEach((item, i) => addClass(item, "border_red", labelsInp[i], "color_red"));
      addMessage("Введите логин и пароль", alertError);
    } else {
      console.log("Неверный логин или пароль");
      alertError.classList.remove("valid");
      loginDetails.forEach((item, i) => addClass(item, "border_red", labelsInp[i], "color_red"));
      addMessage("Неверный логин или пароль", alertError);
    }
  });

  localStorage.clear();
};
app();

/*{
  Для проверки:
    email: emma658@mail.ru
    password: pDhIu0IUdb 
*/
