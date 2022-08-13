"use strict";
const app = () => {
  const validateEmail = function (email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };
  const sectionReg = document.querySelector(".registration");
  const formReg = sectionReg.querySelector("#reg-form");
  const inputs = formReg.querySelectorAll(".registration-form__input");
  const labels = formReg.querySelectorAll(".registration-form__label");
  const buttonReg = formReg.querySelector(".registration-form__btn");
  const alerts = formReg.querySelectorAll(".registration-form__alert");

  const checkbox = formReg.querySelector(".checkbox");
  const checkboxMark = formReg.querySelector(".checkbox__mark");
  const errorCheckbox = alerts[2];
  const userEmail = inputs[0];
  const userPassword = inputs[1];

  // //для проверки формы
  userEmail.value = "emma658@mail.ru";
  userPassword.value = "pDhIu0IUdb";
  const userData = {};

  //форма входа
  const sectionLogin = document.querySelector(".login");
  const loginForm = sectionLogin.querySelector("#login-form");
  const btnInput = loginForm.querySelector(".registration-form__btn");
  const loginDetails = loginForm.querySelectorAll(".registration-form__input");
  const checkApprovalMark = loginForm.querySelector(".checkbox__mark");
  const alertsErrors = loginForm.querySelectorAll(".registration-form__alert");
  const labelsInp = loginForm.querySelectorAll(".registration-form__label");

  const addClass = (input, class_input, label, class_label) => {
    input.classList.add(class_input);
    label.classList.add(class_label);
  };

  const removeClass = (input, class_input, label, class_label) => {
    input.classList.remove(class_input);
    label.classList.remove(class_label);
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

  //форма регистрации
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
      item.addEventListener("input", () => {
        removeClass(item, "border_red", labels[i], "color_red");
        addMessage("", alerts[i]);
      });
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
      addMessage("Поле обязательно для заполнения", errorCheckbox);
    } else {
      addMessage("", errorCheckbox);
    }

    checkboxMark.addEventListener("change", () => {
      removeClass(checkbox, "color_red", checkboxMark, "border_red");
      addMessage("", errorCheckbox);
    });

    if (validateEmail(userEmail.value) && userPassword.value.length >= 8 && checkboxMark.checked) {
      userData.email = userEmail.value;
      userData.password = userPassword.value;
      loginDetails[0].value = userData.email;
      loginDetails[1].value = userData.password;

      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);
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

    localStorage.setItem("approval", checkApprovalMark.checked);
    loginDetails.forEach((item, i) => {
      item.addEventListener("input", () => {
        removeClass(item, "border_red", labelsInp[i], "color_red");
      });
    });

    if (
      localStorage.getItem("email") === loginDetails[0].value &&
      localStorage.getItem("password") === loginDetails[1].value
    ) {
      console.log("Вы авторизованы!");
      loginDetails.forEach((item) => (item.value = ""));
      loginDetails.forEach((item, i) => removeClass(item, "border_red", labelsInp[i], "color_red"));
      console.log(localStorage);
      addMessage("Вы авторизованы!", alertsErrors[3]);
      alertsErrors[3].classList.add("valid");
      checkApprovalMark.checked = false;
    } else {
      console.log("Неверный логин или пароль");
      alertsErrors[3].classList.remove("valid");
      loginDetails.forEach((item, i) => addClass(item, "border_red", labelsInp[i], "color_red"));
      addMessage("Неверный логин или пароль", alertsErrors[3]);
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
