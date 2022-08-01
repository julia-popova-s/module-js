/*Пишем простого игрового бота:
Загадывание случайного числа от 1 до 10.
Программа должны быть выполнена с помощью рекурсии, без единого цикла. 
Загаданное число должно храниться «в замыкании» */
"use strict";

const guessGame = () => {
  let numberPuzzle = Math.floor(Math.random() * 10 + 1);
  let attempts = 5;
  let count = 0;

  const checkUserNumber = () => {
    let userAnswer = prompt("Угадай число от 1 до 10");
    let userAnswerNum = +userAnswer;

    const repeatGame = (answer) => {
      if (answer) {
        guessGame();
      } else {
        alert("Игра окончена");
        return;
      }
    };
    count++;
    if (userAnswer === null) {
      count--;
      alert("Игра окончена");
    } else if (userAnswerNum > 10 || userAnswer === "" || userAnswerNum <= 0 || isNaN(userAnswerNum)) {
      count--;
      alert("Введите число от 1 до 10");
      checkUserNumber();
    } else if (count < 5 && userAnswerNum > numberPuzzle) {
      alert(`Загаданное число МЕНЬШЕ. Осталось попыток ${attempts - count}`);
      checkUserNumber();
    } else if (count < 5 && userAnswerNum < numberPuzzle) {
      alert(`Загаданное число БОЛЬШЕ. Осталось попыток ${attempts - count}`);
      checkUserNumber();
    } else if (count <= 5 && userAnswerNum === numberPuzzle) {
      let answer = confirm(
        `Поздравляю, Вы угадали c ${count} попытки загаданное число: ${numberPuzzle} ! Хотели бы сыграть еще?`
      );
      repeatGame(answer);
    } else {
      let answer = confirm("Попытки закончились, хотите сыграть еще?");
      repeatGame(answer);
    }
    return;
  };

  checkUserNumber();
  return;
};
guessGame();
