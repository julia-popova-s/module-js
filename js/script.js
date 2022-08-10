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
  const userParol = inputs[1];
  const labelEmail = labels[0];
  const labelParol = labels[1];

  const checkbox = formReg.querySelector(".checkbox");
  const checkboxMark = formReg.querySelector(".checkbox__mark");
  let message = "Поле обязательно для заполнения";

  const checkForEmptyLine = (input, class_input, label, class_label, message) => {
    alerts.forEach((item) => (item.innerText = message));
    input.classList.add(class_input);
    label.classList.add(class_label);
  };

  const removeClass = (input, class_input, label, class_label) => {
    input.classList.remove(class_input);
    label.classList.remove(class_label);
  };

  const removeAlert = (element, event, label) => {
    element.addEventListener("input", () => {
      removeClass(element, "border_red", label, "invalid");
    });
  };

  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();
    let counter = 0;
    if (userEmail.value === "") {
      checkForEmptyLine(userEmail, "border_red", labelEmail, "invalid", message);
      alerts[0].innerText = "";
    }
    if (!validateEmail(userEmail.value) && userEmail.value != "") {
      alerts[0].innerText = "Email невалидный";
    }
    if (userParol.value === "") {
      checkForEmptyLine(userParol, "border_red", labelParol, "invalid", message);
      alerts[1].innerText = "";
    }
    if (userParol.value.length < 8 && userParol.value != "") {
      alerts[1].innerText = "Пароль должен содержать как минимум 8 символов";
    }
    if (!checkboxMark.checked) {
      checkForEmptyLine(checkbox, "invalid", checkboxMark, "border_red", message);
    }
    if (checkboxMark.checked) {
      alerts[2].innerText = "";
    }
    if (userEmail.value != "") removeAlert(userEmail, "input", labelEmail);
    if (userParol.value != "") removeAlert(userParol, "input", labelEmail);

    if (validateEmail(userEmail.value) && userParol.value.length >= 8 && checkboxMark.checked) {
      alerts.forEach((item) => (item.innerText = ""));

      let userData = {};
      userData.email = userEmail.value;
      userData.password = userParol.value;

      console.log(userData);
      // formReg.submit();
    }
    checkboxMark.addEventListener("change", () => {
      removeClass(checkbox, "invalid", checkboxMark, "border_red");
      alerts[2].innerText = "";
    });

    return;
  });
};
app();
/*{
    email: johndoe@mail.ru
    password: password 
*/
