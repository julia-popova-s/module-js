/*Пишем простого игрового бота:
Загадывание случайного числа от 1 до 10.
Программа должны быть выполнена с помощью рекурсии, без единого цикла. 
Загаданное число должно храниться «в замыкании» */
"use strict";

const guessGame = () => {
  let numberPuzzle = Math.floor(Math.random() * 10 + 1);
  let attempts = 5;
  let count = 0;
  const numberUser = document.querySelector(".number");
  const btn = document.querySelector(".btn_guess");
  const repeatBtn = document.querySelector(".btn_repeat");
  let message = document.querySelector(".message");
  const close = document.querySelector(".btn_close");

  close.addEventListener("click", () => {
    message.innerText = "Игра окончена. Можете попробовать снова";
    guessGame();
  });

  const checkUserNumber = () => {
    let userAnswer = numberUser.value;
    let userAnswerNum = +userAnswer;
    const getBtnRepeat = () => {
      repeatBtn.classList = "btn_repeat_visibile";
      repeatBtn.addEventListener("click", guessGame);
      repeatBtn.addEventListener("click", () => (numberUser.value = ""));
    };
    count++;

    if (userAnswerNum > 10 || userAnswer === "" || userAnswerNum <= 0 || isNaN(userAnswerNum)) {
      count--;
      message.innerText = "Введите число от 1 до 10";
      numberUser.addEventListener("click", () => (numberUser.value = ""));
    } else if (count < 5 && userAnswerNum > numberPuzzle) {
      message.innerText = `Загаданное число МЕНЬШЕ. Осталось попыток ${attempts - count}`;
      numberUser.addEventListener("click", () => (numberUser.value = ""));
    } else if (count < 5 && userAnswerNum < numberPuzzle) {
      message.innerText = `Загаданное число БОЛЬШЕ. Осталось попыток ${attempts - count}`;
      numberUser.addEventListener("click", () => (numberUser.value = ""));
    } else if (count <= 5 && userAnswerNum === numberPuzzle) {
      message.innerText = `Поздравляю, Вы угадали c ${count} попытки загаданное число: ${numberPuzzle} ! Хотели бы сыграть еще? Нажмите кнопку повтора`;
      getBtnRepeat();
    } else {
      message.innerText = "Попытки закончились, хотите сыграть еще? Нажмите кнопку повтора";
      getBtnRepeat();
    }
    return;
  };
  btn.addEventListener("click", checkUserNumber);
  return;
};
guessGame();
