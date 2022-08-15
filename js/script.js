"use strict";

const commercial = document.querySelector(".adv");
const booksWrapper = document.querySelector(".books");
let booksList = Array.from(document.querySelectorAll(".book"));
const body = document.querySelector("body");

// - Удалить рекламу со страницы
commercial.remove();

// - Восстановить порядок книг.
const getSortedList = (list, classItem, message) => {
  for (let k = 0; k < list.length - 1; k++) {
    for (let i = 0; i < list.length - 1; i++) {
      list = Array.from(document.querySelectorAll(classItem));
      let arr = list.filter((item) => item.innerText.indexOf(message) != -1);
      let first = +arr[i].innerText[6];
      let second = +arr[i + 1].innerText[6];
      if (first > second) {
        arr[i].before(arr[i + 1]);
      }
    }
  }
};
getSortedList(booksList, ".book", "Книга");
// for (let k = 0; k < booksList.length - 1; k++) {
//   for (let i = 0; i < booksList.length - 1; i++) {
//     booksList = Array.from(document.querySelectorAll(".book"));
//     let first = +booksList[i].innerText[6];
//     let second = +booksList[i + 1].innerText[6];
//     if (first > second) {
//       booksList[i].before(booksList[i + 1]);
//     }
//   }
// }

// - Заменить картинку заднего фона на другую из папки image
body.style.cssText = "background-image:url('./image/you-dont-know-js.jpg')";

// - Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const titles = document.querySelectorAll(".book h2 a");
titles[2].textContent = "Книга 3. this и Прототипы Объектов";

// - Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
let chapterList = Array.from(document.querySelectorAll(".book__chapter-list li"));
console.log(chapterList);

let listChap = chapterList.filter((item) => item.innerText.indexOf("Глава") != -1);
getSortedList(listChap, ".book__chapter-list li", "Глава");

let listChapApp = chapterList.filter((item) => item.innerText.indexOf("Приложение") != -1);
console.log(listChapApp);
// getSortedList(listChapApp, ".book__chapter-list li", "Приложение");

// - в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
