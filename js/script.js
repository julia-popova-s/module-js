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

// - Заменить картинку заднего фона на другую из папки image
body.style.cssText = "background-image:url('./image/you-dont-know-js.jpg')";

// - Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
const titles = document.querySelectorAll(".book h2 a");
titles[2].textContent = "Книга 3. this и Прототипы Объектов";

// - Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

//получили список книг
const chapterList = Array.from(document.querySelectorAll(".book__chapter-list"));
console.log(chapterList);
//получили список глав книг 2 и 5
const chapterListBook2 = Array.from(chapterList[1].children);
const chapterListBook5 = Array.from(chapterList[4].children);

//функция сортировки глав
const mySort = (list) => {
  list.sort((a, b) => {
    if (a.innerText < b.innerText) {
      return -1;
    }
    if (a.innerText > b.innerText) {
      return 1;
    }
    return 0;
  });
};

const getChapterList = (chapterList) => {
  const list = [];
  const listOther = chapterList.filter(
    (item) => item.innerText.includes("Глава") === false && item.innerText.includes("Приложение") === false
  );
  const listChap = chapterList.filter((item) => item.innerText.indexOf("Глава") != -1);
  mySort(listChap);
  const listChapApp = chapterList.filter((item) => item.innerText.indexOf("Приложение") != -1);
  mySort(listChapApp);
  listOther.forEach((item) => list.push(item.innerText));
  listChap.forEach((item) => list.push(item.innerText));
  listChapApp.forEach((item) => list.push(item.innerText));
  return list;
};
const resultList2 = getChapterList(chapterListBook2);
chapterListBook2.forEach((item, i) => (item.innerText = resultList2[i]));

const resultList5 = getChapterList(chapterListBook5);
chapterListBook5.forEach((item, i) => (item.innerText = resultList5[i]));

// - в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const book6 = Array.from(chapterList[5].children);
console.log(book6);
const item = document.createElement("li");
item.innerText = "Глава 8: За пределами ES6";
book6[8].append(item);
