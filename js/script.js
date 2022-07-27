"use strict";

let money = 70000;
let profit = "Фриланс";
let expenses = "Питание, Проезд, Развлечения, Медицина";
let purpose = 100000;
let period = 6;
let budgetDay = Math.floor(money / 30);

money = +prompt("Ваш месячный доход (руб)?", 100000);
console.log(`Месячный доход равен ${money} рублей`);

purpose = +prompt("Сколько хотите накопить (руб)?", 120000);
console.log(`Цель накопить ${purpose} рублей`);

expenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую. Пример: питание, проезд",
  "питание, проезд, развлечения, медицина"
);

let newArrExpenses = expenses.toLowerCase().split(", ");
console.log("Обязательные статьи расходов:");
console.log(newArrExpenses);

let amount = +prompt(
  "Во сколько обойдуться обязательные статьи расходов (руб)?",
  60000
);
console.log(`Ваши обязательные расходы: ${amount} рублей`);

let deposit = confirm("Есть ли у вас вклад в банке?");
deposit ? console.log("Вклад в банке есть") : console.log("Вклада в банке нет");

let budgetMonth = money - amount;
console.log(`Ваш месячный бюджет равен ${budgetMonth} рублей`);

period = Math.ceil(purpose / budgetMonth);
console.log(`За ${period} месяцев(-a) будет достигнуна цель ${purpose} рублей`);

budgetDay = Math.floor(budgetMonth / 30);
console.log(`Дневной бюджет равен ${budgetDay} рублей`);

//if выглядит читабельней, чем if else
if (budgetDay > 6000) {
  console.log("У вас высокий уровень дохода");
}
if (budgetDay >= 3000 && budgetDay <= 6000) {
  console.log("У вас средний уровень дохода");
}
if (budgetDay >= 0 && budgetDay < 3000) {
  console.log("К сожалению, у вас уровень дохода ниже среднего");
}
if (budgetDay < 0) {
  console.log("Что-то пошло не так");
}

/*усложненное задание*/
const htmlTag = document.querySelector("html");
let language = htmlTag.getAttribute("lang");
console.log(`Язык страницы ${language}`);

const method = document.querySelectorAll(".method");

const weekRu = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const weekEn = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const week = [weekRu, weekEn];

//Метод 1 - через if
if (language === "ru") {
  method[0].innerText = `Дни недели: ${week[0]}`;
}
if (language === "en") {
  method[0].innerText = `Weekdays: ${week[1]}`;
}

//Метод 2 - через switch case
switch (language) {
  case "ru":
    method[1].innerText = `Дни недели: ${week[0]}`;
    break;
  case "en":
    method[1].innerText = `Weekdays: ${week[1]}`;
    break;
}

//Метод 3 - через массив: конкретный день недели, с заменой языка
if (language === "en") {
  htmlTag.lang = "ru";
} else {
  htmlTag.lang = "en";
}
language = htmlTag.lang;
console.log(`Язык страницы ${language}`);

const date = new Date();
let dayNumber = date.getDay();
if (language === "ru") {
  method[2].innerText = `Сегодня ${week[0][dayNumber].toLowerCase()}!`;
} else {
  method[2].innerText = `Today is ${week[1][dayNumber].toLowerCase()}!`;
}
