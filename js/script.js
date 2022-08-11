"use strict";
const app = () => {
  function validateEmail(email) {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }
  const formReg = document.querySelector(".registration-form");
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

  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();
    const userData = {};

    //валидация email
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
      userData.password = userPassword.value;
      addMessage("", errorPassword);
    }

    //валидация checkbox

    if (!checkboxMark.checked) {
      addClass(checkbox, "invalid", checkboxMark, "border_red");
      addMessage("Поле обязательно для заполнения", errorCheckbox);
    } else {
      addMessage("", errorCheckbox);
    }

    userEmail.addEventListener("input", () => {
      removeClass(userEmail, "border_red", labelEmail, "invalid");
      addMessage("", errorEmail);
    });
    userPassword.addEventListener("input", () => {
      removeClass(userPassword, "border_red", labelPassword, "invalid");
      addMessage("", errorPassword);
    });
    checkboxMark.addEventListener("change", () => {
      removeClass(checkbox, "invalid", checkboxMark, "border_red");
      addMessage("", errorCheckbox);
    });

    if (validateEmail(userEmail.value) && userPassword.value.length >= 8 && checkboxMark.checked) {
      console.log(userData);
      inputs.forEach((item) => (item.value = ""));
    }

    return;
  });
};
app();

/*{
  Для проверки:
    email: johndoe@mail.ru
    password: password 
*/
