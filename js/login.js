const btnInput = loginForm.querySelector(".login-form__btn");
const checkApprovalMark = loginForm.querySelector(".checkbox__mark");
const alertError = loginForm.querySelector(".login-form__alert");
const labelsInp = loginForm.querySelectorAll(".login-form__label");

loginForm.addEventListener("input", (e) => {
  removeClass(e.target, "border_red");
  if (e.target.name === "userEmail") {
    loginDetails[0].value = e.target.value.trim();
    removeClass(labelsInp[0], "color_red");
  } else if (e.target.name === "userPassword") {
    loginDetails[1].value = e.target.value.trim().replace(" ", "");
    removeClass(labelsInp[1], "color_red");
  }
});

btnInput.addEventListener("click", (e) => {
  e.preventDefault();
  const userData = JSON.parse(localStorage.getItem(loginDetails[0].value));
  console.log("Данные из хранилища:");
  console.log(userData);
  userData.consentToMail = checkApprovalMark.checked;
  localStorage.setItem(loginDetails[0].value, JSON.stringify(userData));

  if (userData.email === loginDetails[0].value && userData.password === loginDetails[1].value) {
    console.log("Вы авторизованы!");
    loginDetails.forEach((item) => (item.value = ""));
    loginDetails.forEach((item, i) => removeClass(item, "border_red", labelsInp[i], "color_red"));
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
