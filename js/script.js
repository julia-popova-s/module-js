"use strict";

const app = () => {
  let money = 70000;
  let profit = "Фриланс, репетиторство";
  let expenses = "Питание, Проезд, Развлечения, Медицина";
  let purpose = 100000;
  let period = 6;
  let budgetDay = Math.floor(money / 30);

  money = +prompt("Ваш месячный доход (руб)?", 100000);
  console.log(`Месячный доход равен ${money} рублей`);

  purpose = +prompt("Сколько хотите накопить (руб)?", 150000);
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
  if (deposit) {
    console.log("Вклад в банке есть");
  } else {
    console.log("Вклада в банке нет");
  }

  let extraMoney = +prompt(
    `Перечислите возможный доход за ваши дополнительные работы (руб): ${profit.toLowerCase()}?`,
    30000
  );
  console.log(`Возможный доход за доп.работы ${extraMoney} рублей`);

  /*lesson-04*/

  /* Объявить функцию getAccumulatedIncome. Возврат накоплений за месяц (Доходы минус расходы)*/
  const getAccumulatedIncome = (money, extraMoney, amount) => money + extraMoney - amount;

  /* Объявить переменную accumulatedIncome и присвоить результат от getAccumulatedIncome*/
  let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount);

  /*Объявить функцию getTargetMonth. Подсчитать, за какой период будет достигнута цель, зная результат месячного накопления (getAccumulatedIncome)*/
  const getTargetMonth = (purpose, income) => Math.ceil(purpose / income);

  /*budgetDay рассчитываем исходя из значения месячного накопления (accumulatedIncome)*/
  budgetDay = Math.floor(accumulatedIncome / 30);

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

  /*Очистить консоль логи и должны остаться:*/
  console.clear();

  console.log(
    `Ваш бюджет на месяц с учетом Ваших расходов составляет: ${getAccumulatedIncome(money, extraMoney, amount)} рублей`
  );
  console.log(
    `Ваща цель накопить ${purpose} с учетом Ваших расходов будет достигнута через ${getTargetMonth(purpose, accumulatedIncome)} месяца(-ев)`
  );
  console.log(`Дневной бюджет ${budgetDay} рублей`);
};

app();
