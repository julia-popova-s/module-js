/*Пишем простого игрового бота:
Загадывание случайного числа от 1 до 10.
Программа должны быть выполнена с помощью рекурсии, без единого цикла. 
Загаданное число должно храниться «в замыкании» */
"use strict";

const guessGame = () => {
  let numberPuzzle = Math.floor(Math.random() * 10 + 1);
  let attempt = 5;
  let residue;

  const checkUserNumber = () => {
    let userAnswer = prompt("Угадай число от 1 до 10");
    let userAnswerNum = +userAnswer;

    const checkNumberOfAttempts = (attempt) => {
      if (attempt <= 0) {
        let answer = confirm("Попытки закончились, хотите сыграть еще?");
        if (answer) {
          guessGame();
        } else {
          alert("Игра окончена");
          return false;
        }
      }
      return true;
    };

    if (userAnswer === null) {
      alert("Игра окончена");
      return;
    }
    if (userAnswerNum > 10 || userAnswer === "" || userAnswerNum <= 0 || isNaN(userAnswerNum)) {
      alert("Введите число от 1 до 10");
      checkUserNumber();
    }
    if (userAnswerNum > numberPuzzle && userAnswerNum != 0) {
      attempt--;
      if (checkNumberOfAttempts(attempt)) {
        alert(`Загаданное число МЕНЬШЕ. Осталось попыток ${attempt}`);
        checkUserNumber();
      }
    }
    if (userAnswerNum < numberPuzzle && userAnswerNum != 0) {
      attempt--;
      if (checkNumberOfAttempts(attempt)) {
        alert(`Загаданное число БОЛЬШЕ. Осталось попыток ${attempt}`);
        checkUserNumber();
      }
    }

    if (userAnswerNum === numberPuzzle) {
      attempt--;
      if (checkNumberOfAttempts(attempt)) {
        let answer = confirm(`Поздравляю, Вы угадали c ${5 - attempt} попытки! Хотели бы сыграть еще?`);
        if (answer) {
          guessGame();
        } else {
          alert("Игра окончена");
          return;
        }
      }
      return;
    }
    console.log(userAnswerNum);
    return;
  };

  checkUserNumber();
  return;
};
guessGame();
