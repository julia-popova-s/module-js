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
  console.log(checkboxLabel.style);
  buttonReg.addEventListener("click", (e) => {
    e.preventDefault();
    let message;
    const checkEmpty = (element, message) => {
      // message = "<p class='registration-form__message'>Поле обязательно для заполнения</p>";
      element.insertAdjacentHTML("afterend", message);
      element.classList.add("registration-form__input_color_red");
    };
    if (userEmail.value === "") {
      message = "<p class='registration-form__message'>Поле обязательно для заполнения</p>";
      userEmail.insertAdjacentHTML("afterend", message);
      userEmail.classList.add("registration-form__input_border_red");
      labels[0].classList.add("invalid");
    }
    if (userParol.value === "") {
      message = "<p class='registration-form__message'>Поле обязательно для заполнения</p>";
      userParol.insertAdjacentHTML("afterend", message);
      userParol.classList.add("registration-form__input_border_red");
      labels[1].classList.add("invalid");
    }
    if (!checkboxMark.cheked) {
      message = "<p class='registration-form__message'>Поле обязательно для заполнения</p>";
      checkbox.insertAdjacentHTML("afterend", message);
    }
    return;
  });
};
app();
