const app = () => {
  const validateEmail = function (email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };
  //секция регистрации
  const sectionReg = document.querySelector(".registration");
  const formReg = sectionReg.querySelector("#reg-form");
  const inputs = formReg.querySelectorAll(".login-form__input");
  const labels = formReg.querySelectorAll(".login-form__label");
  const buttonReg = formReg.querySelector(".login-form__btn");
  const alerts = formReg.querySelectorAll(".login-form__alert");
  const toAuthorization = formReg.querySelector(".login-form__autho");
  const checkbox = formReg.querySelector(".checkbox");
  const checkboxMark = formReg.querySelector(".checkbox__mark");
  const alertCheckbox = alerts[2];
  const userEmail = inputs[0];
  const userPassword = inputs[1];
  const invalidPassword = "Пароль должен содержать как минимум 8 символов";
  const invalidEmail = "Email невалидный";
  //секция входа
  const sectionLogin = document.querySelector(".login");
  const formLogin = sectionLogin.querySelector("#login-id");
  const loginDetails = formLogin.querySelectorAll(".login-form__input");
  const btnInput = formLogin.querySelector(".login-form__btn");
  const checkApproval = formLogin.querySelector(".checkbox");
  const checkApprovalMark = formLogin.querySelector(".checkbox__mark");
  const alertsErrors = formLogin.querySelectorAll(".login-form__alert");
  const labelsInp = formLogin.querySelectorAll(".login-form__label");
  const toRegistration = formLogin.querySelector(".login-form__reg");
  const userData = [];
  let userDB;

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
  const deleteStyles = (inputs, labels, alerts, e) => {
    removeClass(e.target, "border_red");
    if (e.target.name === "email") {
      inputs[0].value = e.target.value.trim();
      removeClass(labels[0], "color_red");
      addMessage("", alerts[0]);
    } else if (e.target.name === "password") {
      inputs[1].value = e.target.value.trim().replace(" ", "");
      removeClass(labels[1], "color_red");
      addMessage("", alerts[1]);
    }
  };
  formReg.addEventListener("input", (e) => deleteStyles(inputs, labels, alerts, e));
  formLogin.addEventListener("input", (e) => deleteStyles(loginDetails, labelsInp, alertsErrors, e));

  //функция проверки на пустые строки
  const checkForEmptyLines = (inputs, labels, alerts) => {
    inputs.forEach((item, i) => {
      if (item.value === "") {
        addClass(item, "border_red", labels[i], "color_red");
        addMessage("Поле обязательно для заполнения", alerts[i]);
      } else {
        addMessage("", alerts[i]);
      }
    });
  };
  //валидация входных данных
  const validateInputs = (inputs, labels, alerts, messageEmail, messagePassword) => {
    if (!validateEmail(inputs[0].value) && inputs[0].value != "") {
      addClass(inputs[0], "border_red", labels[0], "color_red");
      addMessage(messageEmail, alerts[0]);
    }
    if (inputs[1].value.length < 8 && inputs[1].value != "") {
      addClass(inputs[1], "border_red", labels[1], "color_red");
      addMessage(messagePassword, alerts[1]);
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
  //форма регистрации
  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();
    checkForEmptyLines(inputs, labels, alerts);
    validateInputs(inputs, labels, alerts, invalidEmail, invalidPassword);
    validateCheckbox(checkbox, checkboxMark, alertCheckbox);

    if (validateEmail(userEmail.value) && userPassword.value.length >= 8 && checkboxMark.checked) {
      userData.push(userEmail.value);
      userData.push(userPassword.value);
      loginDetails[0].value = userData[0];
      loginDetails[1].value = userData[1];
      localStorage.setItem(userEmail.value, JSON.stringify(userData));
      console.log("Данные пользователя:");
      console.log(localStorage.getItem(userEmail.value));
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
};
app();
