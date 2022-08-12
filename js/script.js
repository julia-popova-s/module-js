"use strict";
const app = () => {
  function validateEmail(email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }
  const sectionReg = document.querySelector(".registration");
  const formReg = document.querySelector("#reg-form");
  const inputs = formReg.querySelectorAll(".registration-form__input");
  const labels = formReg.querySelectorAll(".registration-form__label");
  const buttonReg = formReg.querySelector(".registration-form__btn");
  const alerts = formReg.querySelectorAll(".registration-form__alert");

  const userEmail = inputs[0];
  const userPassword = inputs[1];
  const labelEmail = labels[0];
  const labelPassword = labels[1];
  const errorEmail = alerts[0];
  const errorPassword = alerts[1];
  const errorCheckbox = alerts[2];
  //для проверки формы
  userEmail.value = "emma658@mail.ru";
  userPassword.value = "pDhIu0IUdb";
  const checkbox = formReg.querySelector(".checkbox");
  const checkboxMark = formReg.querySelector(".checkbox__mark");

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
  const userData = {};

  //форма регистрации
  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();

    //валидация email
    // const checkValidationInputs = (element, validityCondition, message) => {
    //   if (element.value === "") {
    //     addClass(element, "border_red", labelEmail, "invalid");
    //     addMessage("Поле обязательно для заполнения", errorEmail);
    //   } else if (validityCondition) {
    //     addClass(element, "border_red", labelEmail, "invalid");
    //     addMessage(message, errorEmail);
    //   } else {
    //     addMessage("", errorEmail);
    //     userData.email = element.value;
    //   }
    // };
    // checkValidationInputs(userEmail, !validateEmail(userEmail.value), "Email невалидный");
    // checkValidationInputs(
    //   userPassword,
    //   userPassword.value.length < 8,
    //   "Пароль должен содержать как минимум 8 символов"
    // );

    if (userEmail.value === "") {
      addClass(userEmail, "border_red", labelEmail, "invalid");
      addMessage("Поле обязательно для заполнения", errorEmail);
    } else if (!validateEmail(userEmail.value)) {
      addClass(userEmail, "border_red", labelEmail, "invalid");
      addMessage("Email невалидный", errorEmail);
    } else {
      addMessage("", errorEmail);
      userData.email = userEmail.value;
    }
    //валидация password

    if (userPassword.value === "") {
      addClass(userPassword, "border_red", labelPassword, "invalid");
      addMessage("Поле обязательно для заполнения", errorPassword);
    } else if (userPassword.value.length < 8) {
      addClass(userPassword, "border_red", labelPassword, "invalid");
      addMessage("Пароль должен содержать как минимум 8 символов", errorPassword);
    } else {
      addMessage("", errorPassword);
      userData.password = userPassword.value;
    }

    //валидация checkbox

    if (!checkboxMark.checked) {
      addClass(checkbox, "invalid", checkboxMark, "border_red");
      addMessage("Поле обязательно для заполнения", errorCheckbox);
    } else {
      addMessage("", errorCheckbox);
    }
    inputs.forEach((item, i) => {
      item.addEventListener("input", () => {
        removeClass(item, "border_red", labels[i], "invalid");
        addMessage("", alerts[i]);
      });
    });

    checkboxMark.addEventListener("change", () => {
      removeClass(checkbox, "invalid", checkboxMark, "border_red");
      addMessage("", errorCheckbox);
    });

    if (validateEmail(userEmail.value) && userPassword.value.length >= 8 && checkboxMark.checked) {
      console.log("Данные пользователя:");
      console.log(userData);
      inputs.forEach((item) => (item.value = ""));
      checkboxMark.checked = false;
      sectionReg.classList.add("visibility-hidden");
      sectionReg.classList.remove("visibility");
      sectionLogin.classList.add("visibility");
      sectionLogin.classList.remove("visibility-hidden");
      loginDetails[0].value = userData.email;
      loginDetails[1].value = userData.password;
      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);
      return userData;
    }
  });

  //работа с формой входа
  const sectionLogin = document.querySelector(".login");
  const loginForm = document.querySelector("#login-form");
  const btnInput = loginForm.querySelector(".registration-form__btn");
  const loginDetails = loginForm.querySelectorAll(".registration-form__input");
  const checkApprovalMark = loginForm.querySelector(".checkbox__mark");
  const alertsErrors = loginForm.querySelectorAll(".registration-form__alert");
  const labelsInp = loginForm.querySelectorAll(".registration-form__label");

  if (localStorage.length === 0) {
    sectionReg.classList.add("visibility");
    sectionLogin.classList.add("visibility-hidden");
  } else {
    sectionLogin.classList.add("visibility");
    sectionReg.classList.add("visibility-hidden");
  }

  //форма входа
  btnInput.addEventListener("click", (e) => {
    e.preventDefault();

    // if (localStorage.length === 0) {
    //   formReg.classList.add("visibility");
    //   loginForm.classList.add("visibility-hidden");
    // } else {
    //   formReg.classList.add("visibility-hidden");
    //   loginForm.classList.add("visibility");
    // }

    localStorage.setItem("approval", checkApprovalMark.checked);
    loginDetails.forEach((item, i) => {
      item.addEventListener("input", () => {
        removeClass(item, "border_red", labelsInp[i], "invalid");
      });
    });

    if (
      localStorage.getItem("email") === loginDetails[0].value &&
      localStorage.getItem("password") === loginDetails[1].value
    ) {
      console.log("Вы авторизованы!");
      loginDetails.forEach((item) => (item.value = ""));
      console.log(localStorage);
      addMessage("Вы авторизованы!", alertsErrors[3]);
      alertsErrors[3].classList.add("valid");
      checkApprovalMark.checked = false;
    } else {
      console.log("Неверный логин или пароль");
      alertsErrors[3].classList.remove("valid");
      loginDetails.forEach((item, i) => addClass(item, "border_red", labelsInp[i], "invalid"));
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
