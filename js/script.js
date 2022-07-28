/*Пишем простого игрового бота:
Загадывание случайного числа от 1 до 10.
Программа должны быть выполнена с помощью рекурсии, без единого цикла. 
Загаданное число должно храниться «в замыкании» */
"use strict";
const app = () => {
  let numberPuzzle = Math.floor(Math.random() * 11);
  let guess = 5;
  const checkUserNumber = () => {
    let userAttempt = prompt("Угадай число от 1 до 10");
    let userAttemptNum = +userAttempt;

    if (userAttempt === null) {
      alert("Игра окончена");
      return;
    }
    if (userAttemptNum > 10 || userAttempt === "" || userAttemptNum < 0) {
      alert("Введите число от 1 до 10");
      checkUserNumber();
    }
    if (isNaN(userAttemptNum)) {
      alert("Введи число!");
      checkUserNumber();
    }
    if (userAttemptNum > numberPuzzle) {
      guess--;
      alert(`Загаданное число меньше. Осталось попыток: ${guess}`);
      checkUserNumber();
    }
    if (userAttemptNum < numberPuzzle) {
      guess--;
      alert(`Загаданное число больше. Осталось попыток: ${guess}`);
      checkUserNumber();
    }

    if (userAttemptNum === numberPuzzle) {
      alert(`Поздравляю, Вы угадали за ${5 - guess} попытки!`);
      return;
    }
    console.log(userAttemptNum);
  };

  checkUserNumber();
};
app();
