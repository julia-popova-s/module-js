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
  const userEmail = inputs[0];
  const userParol = inputs[1];
  const checkbox = formReg.querySelector(".checkbox");
  const checkboxMark = formReg.querySelector(".checkbox__mark");
  const checkboxLabel = formReg.querySelector(".checkbox__label");
  let message = "<p class='registration-form__message'>Поле обязательно для заполнения</p>";

  const checkForEmptyLine = (input, class_input, label, class_label, message) => {
    input.insertAdjacentHTML("afterend", message);
    input.classList.add(class_input);
    label.classList.add(class_label);
  };
  const removeClass = (input, class_input, label, class_label) => {
    input.classList.remove(class_input);
    label.classList.remove(class_label);
  };

  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();

    if (userEmail.value === "") {
      checkForEmptyLine(userEmail, "border_red", labels[0], "invalid", message);
    }
    if (userParol.value === "") {
      checkForEmptyLine(userParol, "border_red", labels[1], "invalid", message);
    }
    if (!checkboxMark.cheked) {
      checkForEmptyLine(checkbox, "invalid", checkboxMark, "border_red", message);
    }

    let alerts = document.querySelectorAll(".registration-form__message");

    userEmail.addEventListener("input", () => {
      removeClass(userEmail, "border_red", labels[0], "invalid");
      alerts[0].remove();
    });

    userParol.addEventListener("input", () => {
      removeClass(userParol, "border_red", labels[1], "invalid");
      alerts[1].remove();
    });
    checkboxMark.addEventListener("change", () => {
      removeClass(checkbox, "invalid", checkboxMark, "border_red");
    });

    return;
  });
};
app();
