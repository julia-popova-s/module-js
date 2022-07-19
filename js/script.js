'use strict';

let money = 70000;
let profit = "Фриланс";
let expenses = "Питание, Проезд, Развлечения, Медицина";
let purpose = 50000;
let period = 6;

console.log(typeof money, typeof profit);
console.log(expenses.length);
console.log(`Месячный бюджет равен ${money} рублей`);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${purpose} рублей`);

let budgetDay = Math.floor(money / 30);
console.log(`Дневной бюджет равен ${budgetDay} рублей`);

/*усложненное задание*/

let newExpenses = expenses.toLowerCase();
console.log(newExpenses);

let newArrExpenses = newExpenses.split(', ');
console.log(newArrExpenses);

let amount = [20000, 5000, 5000, 7000];
console.log('Расходы: ');
newArrExpenses.forEach((el, key) => console.log(`${el} : ${amount[key]} рублей`));