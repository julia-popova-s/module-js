"use strict";

let money = 70000;
let profit = "Фриланс, репетиторство";
let expenses = "Питание, Проезд, Развлечения, Медицина";
let purpose = 100000;
let period = 6;
let budgetDay = Math.floor(money / 30);

money = +prompt("Ваш месячный доход (руб)?", 100000);
purpose = +prompt("Сколько хотите накопить (руб)?", 150000);
expenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую. Пример: питание, проезд",
  "питание, проезд, развлечения, медицина"
);
let amount = +prompt(
  "Во сколько обойдуться обязательные статьи расходов (руб)?",
  60000
);
let extraMoney = +prompt(
  `Перечислите возможный доход за ваши дополнительные работы (руб): ${profit.toLowerCase()}?`,
  30000
);
/* Объявить функцию getAccumulatedIncome. Возврат накоплений за месяц (Доходы минус расходы)*/

const getAccumulatedIncome = function (money, extraMoney, amount) {
  return money + extraMoney - amount;
};

/* Объявить переменную accumulatedIncome и присвоить результат от getAccumulatedIncome*/

let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount);

/*Объявить функцию getTargetMonth. Подсчитать, за какой период будет достигнута цель, зная результат месячного накопления (getAccumulatedIncome)*/

const getTargetMonth = function (purpose, income) {
  return Math.ceil(purpose / income);
};
budgetDay = Math.floor(accumulatedIncome / 30);

console.log(
  `Ваш бюджет на месяц с учетом Ваших расходов составляет: ${getAccumulatedIncome(money, extraMoney, amount)} рублей`
);
console.log(
  `Ваща цель накопить ${purpose} с учетом Ваших расходов будет достигнута через ${getTargetMonth(purpose, accumulatedIncome )} месяца(-ев)`
);
console.log(`Дневной бюджет ${budgetDay} рублей`);
