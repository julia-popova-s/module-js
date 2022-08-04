"use strict";

const app = () => {
  let money = 70000;
  let profit = "Фриланс, репетиторство";
  let purpose = 100000;
  let budgetDay = Math.floor(money / 30);

  const getMessageError = (message) => {
    let money = +prompt(message);
    while (isNaN(money)) {
      alert("Введите число!");
      money = +prompt(message);
    }
    return money;
  };

  money = getMessageError("Ваш месячный доход (руб)?");
  purpose = +prompt("Сколько хотите накопить (руб)?", 150000);

  let amount = getMessageError("Во сколько обойдуться обязательные статьи расходов (руб)?");
  let extraMoney = getMessageError(
    `Перечислите возможный доход за ваши дополнительные работы (руб): ${profit.toLowerCase()}?`
  );

  const getAccumulatedIncome = (money, extraMoney, amount) => money + extraMoney - amount;
  let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount);

  const getTargetMonth = (purpose, income) => {
    let targetMonth = Math.ceil(purpose / income);
    if (targetMonth > 0 && targetMonth != Infinity) console.log("Цель будет достигнута");
    if (targetMonth <= 0 || targetMonth === Infinity) console.log("Цель не будет достигнута");
    return targetMonth;
  };

  budgetDay = Math.floor(accumulatedIncome / 30);
  console.log(
    `Ваш бюджет на месяц с учетом Ваших расходов составляет: ${getAccumulatedIncome(money, extraMoney, amount)} рублей`
  );
  console.log(
    `Ваща цель накопить ${purpose} рублей с учетом Ваших расходов будет достигнута через ${getTargetMonth(
      purpose,
      accumulatedIncome
    )} месяца(-ев)`
  );
  console.log(`Дневной бюджет ${budgetDay} рублей`);
};

app();
console.log("_____________________");

/*усложненное задание*/

const getNumbers = () => {
  const numbers = [];
  numbers.push("28", "58", "35", "48", "35", "42", "78");
  console.log(`Исходный массив: ${numbers}`);

  let numbersFiltered = numbers.filter((item) => item[0] === "4" || item[0] === "2");
  console.log(`Элементы массива начинаются с цифр 2 и 4: ${numbersFiltered}`);
};

getNumbers();

const getUserString = (str) => {
  let userString = str.trim();
  if (typeof str === "string" && userString.length < 30) {
    console.log(`Вы ввели строку: ${userString}`);
  }
  if (typeof str === "string" && userString.length >= 30) {
    console.log(`Вы ввели строку: ${userString.slice(0, 30)}...`);
    console.log(`Длина видимой части строки ${userString.slice(0, 30).length}`);
  }
};
getUserString("  яблоко    ");
getUserString(
  "     Наше дело не так однозначно, как может показаться: сплочённость команды профессионалов однозначно определяет каждого участника как способного принимать собственные решения касаемо переосмысления внешнеэкономических политик.     "
);
